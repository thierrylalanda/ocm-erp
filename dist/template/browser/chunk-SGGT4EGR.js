import {
  DateRangePickerComponent
} from "./chunk-2I7DAYVQ.js";
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
import "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
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

// src/app/features/invantory-sales/inventory/inventory.component.ts
var _c0 = () => ({ standalone: true });
function InventoryComponent_For_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 152)(2, "div", 153)(3, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_For_118_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 88)(6, "a", 155);
    \u0275\u0275element(7, "img", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 157)(10, "a", 158);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td")(13, "a", 159);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 141);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 141);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 141);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 88)(25, "a", 160);
    \u0275\u0275element(26, "i", 161);
    \u0275\u0275text(27, " History ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 162);
    \u0275\u0275element(29, "i", 161);
    \u0275\u0275text(30, " Stock In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 163);
    \u0275\u0275element(32, "i", 161);
    \u0275\u0275text(33, " Stock Out ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "td", 164)(35, "a", 165);
    \u0275\u0275element(36, "i", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "ul", 6)(38, "li")(39, "a", 167);
    \u0275\u0275element(40, "i", 168);
    \u0275\u0275text(41, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "li")(43, "a", 169);
    \u0275\u0275element(44, "i", 170);
    \u0275\u0275text(45, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/products/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.productService);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.sellingPrice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.purchasePrice);
  }
}
function InventoryComponent_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 171);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function InventoryComponent_app_custom_pagination_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var InventoryComponent = class _InventoryComponent {
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
    this.data.getinventory().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.allInventory) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getinventory().subscribe((apiRes) => {
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
  static \u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["app-inventory"]], decls: 769, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-grid-3", "me-1"], [1, "dropdown-menu", "dropdown-menu"], [1, "dropdown-item", "d-flex", "align-items-center", "form-switch"], [1, "fa-solid", "fa-grip-vertical", "me-3", "text-default"], ["type", "checkbox", "checked", "", 1, "form-check-input", "m-0", "me-2"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "qt"], ["mat-sort-header", "sp"], ["mat-sort-header", "pp"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/products/product-01.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-02.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-03.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-04.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-05.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/products/product-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "text-danger"], [1, "d-flex", "align-items-center"], [1, "form-check", "me-3"], ["type", "radio", "name", "Radio", "id", "Radio-sm-1", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "Radio", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], [1, "row"], [1, "col-md-6"], ["type", "text", "readonly", "", 1, "form-control"], [1, "col-md-12"], ["type", "text", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "radio", "name", "Radio", "id", "Radio-sm-3", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-3", 1, "form-check-label"], ["type", "radio", "name", "Radio", "id", "Radio-sm-4", 1, "form-check-input"], ["for", "Radio-sm-4", 1, "form-check-label"], ["placeholder", "Apple iPhone 15", 1, "custom-mat-select", "select"], ["type", "text", "value", "PR00025", "readonly", "", 1, "form-control"], ["type", "text", "value", "Box", "readonly", "", 1, "form-control"], ["type", "text", "value", "98", "readonly", "", 1, "form-control"], ["type", "text", "value", "78", "readonly", "", 1, "form-control"], ["type", "text", "value", "15", 1, "form-control"], ["placeholder", "Stock In", 1, "custom-mat-select", "select"], ["id", "add_stockin", 1, "modal", "fade"], ["type", "radio", "name", "Radio", "id", "Radio-sm-5", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-5", 1, "form-check-label"], ["type", "radio", "name", "Radio", "id", "Radio-sm-6", 1, "form-check-input"], ["for", "Radio-sm-6", 1, "form-check-label"], [1, "text-danger", "ms-1"], ["disabled", "", "placeholder", "Apple iPhone 15", 1, "custom-mat-select", "select"], ["placeholder", "Box", 1, "custom-mat-select", "select"], ["rows", "2", 1, "form-control"], ["id", "add_stockout", 1, "modal", "fade"], ["type", "radio", "name", "Radio", "id", "Radio-sm-7", "checked", "", 1, "form-check-input"], ["for", "Radio-sm-7", 1, "form-check-label"], ["type", "radio", "name", "Radio", "id", "Radio-sm-8", 1, "form-check-input"], ["for", "Radio-sm-8", 1, "form-check-label"], ["id", "view_history", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "bg-light", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "row-gap-3", "p-3", "rounded", "mb-3"], [1, "fs-14", "fw-semibold", "mb-1"], [1, "text-primary"], ["type", "button", 1, "btn", "btn-outline-white", "me-3"], [1, "isax", "isax-document-like", "me-1"], ["type", "button", 1, "btn", "btn-outline-white"], [1, "isax", "isax-printer", "me-1"], [1, "table-responsive", "border", "border-bottom-0"], [1, "table"], [1, "fw-medium", "fs-14"], [1, "text-dark"], [1, "text-success", "fw-medium"], [1, "text-danger", "fw-medium"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "link-default"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_history", 1, "btn", "btn-sm", "btn-soft-primary", "border-0", "d-inline-flex", "align-items-center", "me-1", "fs-12", "fw-regular"], [1, "isax", "isax-document-sketch5", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_stockin", 1, "btn", "btn-sm", "btn-soft-success", "border-0", "d-inline-flex", "align-items-center", "me-1", "fs-12", "fw-regular"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_stockout", 1, "btn", "btn-sm", "btn-soft-danger", "border-0", "d-inline-flex", "align-items-center", "fs-12", "fw-regular"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis-vertical"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function InventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Inventory");
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
      \u0275\u0275text(20, "New Inventory ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InventoryComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275text(58, "Product/Service");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "li")(60, "label", 30);
      \u0275\u0275element(61, "i", 31)(62, "input", 32);
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "Code");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "li")(66, "label", 30);
      \u0275\u0275element(67, "i", 31)(68, "input", 32);
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Unit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "li")(72, "label", 30);
      \u0275\u0275element(73, "i", 31)(74, "input", 32);
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "li")(78, "label", 30);
      \u0275\u0275element(79, "i", 31)(80, "input", 32);
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "Selling Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "li")(84, "label", 30);
      \u0275\u0275element(85, "i", 31)(86, "input", 33);
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Purchase Price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "li")(90, "label", 30);
      \u0275\u0275element(91, "i", 31)(92, "input", 33);
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, "Status");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(95, "div", 34)(96, "table", 35);
      \u0275\u0275listener("matSortChange", function InventoryComponent_Template_table_matSortChange_96_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(97, "thead", 36)(98, "tr")(99, "th", 37)(100, "div", 38);
      \u0275\u0275listener("click", function InventoryComponent_Template_div_click_100_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(101, "input", 39);
      \u0275\u0275twoWayListener("ngModelChange", function InventoryComponent_Template_input_ngModelChange_101_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "th", 37);
      \u0275\u0275text(103, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 37);
      \u0275\u0275text(105, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 37);
      \u0275\u0275text(107, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 40);
      \u0275\u0275text(109, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 41);
      \u0275\u0275text(111, "Selling Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 42);
      \u0275\u0275text(113, "Purchase Price");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "th", 37)(115, "th", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "tbody");
      \u0275\u0275repeaterCreate(117, InventoryComponent_For_118_Template, 46, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(119, InventoryComponent_Conditional_119_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(120, InventoryComponent_app_custom_pagination_120_Template, 1, 0, "app-custom-pagination", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 44)(122, "div", 45)(123, "div", 46)(124, "h6", 47);
      \u0275\u0275text(125, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "button", 48);
      \u0275\u0275element(127, "i", 49);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "div", 50)(129, "form")(130, "div", 10)(131, "label", 51);
      \u0275\u0275text(132, "Product/Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 26)(134, "a", 52);
      \u0275\u0275text(135, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 53)(137, "div", 10)(138, "div", 54)(139, "span", 55);
      \u0275\u0275element(140, "i", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275element(141, "input", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "ul", 10)(143, "li", 58)(144, "label", 59);
      \u0275\u0275element(145, "input", 60);
      \u0275\u0275text(146, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "a", 61);
      \u0275\u0275text(148, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "li")(150, "label", 62);
      \u0275\u0275element(151, "input", 33);
      \u0275\u0275elementStart(152, "span", 63);
      \u0275\u0275element(153, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275text(154, "Apple iPhone 15 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "li")(156, "label", 62);
      \u0275\u0275element(157, "input", 33);
      \u0275\u0275elementStart(158, "span", 63);
      \u0275\u0275element(159, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275text(160, "Dell XPS 13 9310 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "li")(162, "label", 62);
      \u0275\u0275element(163, "input", 33);
      \u0275\u0275elementStart(164, "span", 63);
      \u0275\u0275element(165, "img", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, "Bose QuietComfort 45 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "li")(168, "label", 62);
      \u0275\u0275element(169, "input", 33);
      \u0275\u0275elementStart(170, "span", 63);
      \u0275\u0275element(171, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275text(172, "Nike Dri-FIT T-shirt ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "li")(174, "label", 62);
      \u0275\u0275element(175, "input", 33);
      \u0275\u0275elementStart(176, "span", 63);
      \u0275\u0275element(177, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275text(178, "Adidas Ultraboost 22 Running Shoe ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(179, "li")(180, "label", 62);
      \u0275\u0275element(181, "input", 33);
      \u0275\u0275elementStart(182, "span", 63);
      \u0275\u0275element(183, "img", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275text(184, "Samsung French Door Refrigerator ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "div", 70)(186, "div", 71)(187, "a", 72);
      \u0275\u0275text(188, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "div", 71)(190, "a", 73);
      \u0275\u0275text(191, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(192, "div", 10)(193, "label", 51);
      \u0275\u0275text(194, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "mat-select", 74)(196, "mat-option", 75);
      \u0275\u0275text(197, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "mat-option", 75);
      \u0275\u0275text(199, "Kilograms (Kg)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "mat-option", 75);
      \u0275\u0275text(201, "Gram (g)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "mat-option", 75);
      \u0275\u0275text(203, "Liter (l)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "mat-option", 75);
      \u0275\u0275text(205, "Millimetre (mm)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "mat-option", 75);
      \u0275\u0275text(207, "Milliliter (ml)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "mat-option", 75);
      \u0275\u0275text(209, "Pack (pk)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "mat-option", 75);
      \u0275\u0275text(211, "Piece (pc)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(212, "div")(213, "label", 51);
      \u0275\u0275text(214, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 76);
      \u0275\u0275element(216, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "div", 77)(218, "div", 70)(219, "div", 71)(220, "a", 78);
      \u0275\u0275text(221, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div", 71)(223, "button", 79);
      \u0275\u0275text(224, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(225, "div", 80)(226, "div", 81)(227, "div", 82)(228, "div", 83)(229, "h4", 84);
      \u0275\u0275text(230, "Add Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "button", 85);
      \u0275\u0275element(232, "i", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "form")(234, "div", 86)(235, "div", 10)(236, "label", 51);
      \u0275\u0275text(237, "Item Type ");
      \u0275\u0275elementStart(238, "span", 87);
      \u0275\u0275text(239, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "div", 88)(241, "div", 89);
      \u0275\u0275element(242, "input", 90);
      \u0275\u0275elementStart(243, "label", 91);
      \u0275\u0275text(244, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 92);
      \u0275\u0275element(246, "input", 93);
      \u0275\u0275elementStart(247, "label", 94);
      \u0275\u0275text(248, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(249, "div", 10)(250, "label", 51);
      \u0275\u0275text(251, "Item ");
      \u0275\u0275elementStart(252, "span", 87);
      \u0275\u0275text(253, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "mat-select", 74)(255, "mat-option", 75);
      \u0275\u0275text(256, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "mat-option", 75);
      \u0275\u0275text(258, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "mat-option", 75);
      \u0275\u0275text(260, "Dell XPS 13 9310");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "mat-option", 75);
      \u0275\u0275text(262, "Bose QuietComfort 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "mat-option", 75);
      \u0275\u0275text(264, "Nike Dri-FIT T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "mat-option", 75);
      \u0275\u0275text(266, "Adidas Ultraboost ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "mat-option", 75);
      \u0275\u0275text(268, "Samsung French");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "mat-option", 75);
      \u0275\u0275text(270, "Dyson V15 Detect");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(271, "div", 95)(272, "div", 96)(273, "div", 10)(274, "label", 51);
      \u0275\u0275text(275, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(276, "input", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "div", 96)(278, "div", 10)(279, "label", 51);
      \u0275\u0275text(280, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275element(281, "input", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "div", 96)(283, "div", 10)(284, "label", 51);
      \u0275\u0275text(285, "Selling Price ($)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(286, "input", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 96)(288, "div", 10)(289, "label", 51);
      \u0275\u0275text(290, "Purchase Price ($)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(291, "input", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "div", 98)(293, "div", 10)(294, "label", 51);
      \u0275\u0275text(295, "Quantity ");
      \u0275\u0275elementStart(296, "span", 87);
      \u0275\u0275text(297, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(298, "input", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "div", 98)(300, "div")(301, "label", 51);
      \u0275\u0275text(302, "Status ");
      \u0275\u0275elementStart(303, "span", 87);
      \u0275\u0275text(304, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "mat-select", 74)(306, "mat-option", 75);
      \u0275\u0275text(307, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "mat-option", 75);
      \u0275\u0275text(309, "Stock In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "mat-option", 75);
      \u0275\u0275text(311, "Stock Out");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(312, "div", 100)(313, "button", 101);
      \u0275\u0275text(314, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "button", 102);
      \u0275\u0275text(316, "Add New");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(317, "div", 103)(318, "div", 81)(319, "div", 82)(320, "div", 83)(321, "h4", 84);
      \u0275\u0275text(322, "Edit Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "button", 85);
      \u0275\u0275element(324, "i", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(325, "form")(326, "div", 86)(327, "div", 10)(328, "label", 51);
      \u0275\u0275text(329, "Item Type ");
      \u0275\u0275elementStart(330, "span", 87);
      \u0275\u0275text(331, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "div", 88)(333, "div", 89);
      \u0275\u0275element(334, "input", 104);
      \u0275\u0275elementStart(335, "label", 105);
      \u0275\u0275text(336, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "div", 92);
      \u0275\u0275element(338, "input", 106);
      \u0275\u0275elementStart(339, "label", 107);
      \u0275\u0275text(340, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(341, "div", 10)(342, "label", 51);
      \u0275\u0275text(343, "Item ");
      \u0275\u0275elementStart(344, "span", 87);
      \u0275\u0275text(345, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(346, "mat-select", 108)(347, "mat-option", 75);
      \u0275\u0275text(348, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "mat-option", 75);
      \u0275\u0275text(350, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "mat-option", 75);
      \u0275\u0275text(352, "Dell XPS 13 9310");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "mat-option", 75);
      \u0275\u0275text(354, "Bose QuietComfort 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "mat-option", 75);
      \u0275\u0275text(356, "Nike Dri-FIT T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "mat-option", 75);
      \u0275\u0275text(358, "Adidas Ultraboost ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "mat-option", 75);
      \u0275\u0275text(360, "Samsung French");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "mat-option", 75);
      \u0275\u0275text(362, "Dyson V15 Detect");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(363, "div", 95)(364, "div", 96)(365, "div", 10)(366, "label", 51);
      \u0275\u0275text(367, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(368, "input", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(369, "div", 96)(370, "div", 10)(371, "label", 51);
      \u0275\u0275text(372, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275element(373, "input", 110);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "div", 96)(375, "div", 10)(376, "label", 51);
      \u0275\u0275text(377, "Selling Price ($)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(378, "input", 111);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(379, "div", 96)(380, "div", 10)(381, "label", 51);
      \u0275\u0275text(382, "Purchase Price ($)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(383, "input", 112);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "div", 98)(385, "div", 10)(386, "label", 51);
      \u0275\u0275text(387, "Quantity ");
      \u0275\u0275elementStart(388, "span", 87);
      \u0275\u0275text(389, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(390, "input", 113);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(391, "div", 98)(392, "div")(393, "label", 51);
      \u0275\u0275text(394, "Status ");
      \u0275\u0275elementStart(395, "span", 87);
      \u0275\u0275text(396, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(397, "mat-select", 114)(398, "mat-option", 75);
      \u0275\u0275text(399, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "mat-option", 75);
      \u0275\u0275text(401, "Stock In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "mat-option", 75);
      \u0275\u0275text(403, "Stock Out");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(404, "div", 100)(405, "button", 101);
      \u0275\u0275text(406, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "button", 102);
      \u0275\u0275text(408, "Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(409, "div", 115)(410, "div", 81)(411, "div", 82)(412, "div", 83)(413, "h4", 84);
      \u0275\u0275text(414, "Add Stock In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "button", 85);
      \u0275\u0275element(416, "i", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(417, "form")(418, "div", 86)(419, "div", 10)(420, "label", 51);
      \u0275\u0275text(421, "Item Type ");
      \u0275\u0275elementStart(422, "span", 87);
      \u0275\u0275text(423, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(424, "div", 88)(425, "div", 89);
      \u0275\u0275element(426, "input", 116);
      \u0275\u0275elementStart(427, "label", 117);
      \u0275\u0275text(428, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(429, "div", 92);
      \u0275\u0275element(430, "input", 118);
      \u0275\u0275elementStart(431, "label", 119);
      \u0275\u0275text(432, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(433, "div", 10)(434, "label", 51);
      \u0275\u0275text(435, "Item");
      \u0275\u0275elementStart(436, "span", 120);
      \u0275\u0275text(437, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(438, "mat-select", 121)(439, "mat-option", 75);
      \u0275\u0275text(440, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(441, "mat-option", 75);
      \u0275\u0275text(442, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "mat-option", 75);
      \u0275\u0275text(444, "Dell XPS 13 9310");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "mat-option", 75);
      \u0275\u0275text(446, "Bose QuietComfort 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "mat-option", 75);
      \u0275\u0275text(448, "Nike Dri-FIT T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "mat-option", 75);
      \u0275\u0275text(450, "Adidas Ultraboost ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "mat-option", 75);
      \u0275\u0275text(452, "Samsung French");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "mat-option", 75);
      \u0275\u0275text(454, "Dyson V15 Detect");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(455, "div", 95)(456, "div", 96)(457, "div", 10)(458, "label", 51);
      \u0275\u0275text(459, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(460, "input", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(461, "div", 96)(462, "div", 10)(463, "label", 51);
      \u0275\u0275text(464, "Units");
      \u0275\u0275elementStart(465, "span", 120);
      \u0275\u0275text(466, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(467, "mat-select", 122)(468, "mat-option", 75);
      \u0275\u0275text(469, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "mat-option", 75);
      \u0275\u0275text(471, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "mat-option", 75);
      \u0275\u0275text(473, "Box");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "mat-option", 75);
      \u0275\u0275text(475, "Gram (g)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "mat-option", 75);
      \u0275\u0275text(477, "Liter (l)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "mat-option", 75);
      \u0275\u0275text(479, "Millimetre (mm)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "mat-option", 75);
      \u0275\u0275text(481, "Milliliter (ml)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "mat-option", 75);
      \u0275\u0275text(483, "Pack (pk)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "mat-option", 75);
      \u0275\u0275text(485, "Piece (pc)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(486, "div", 98)(487, "div", 10)(488, "label", 51);
      \u0275\u0275text(489, "Quantity");
      \u0275\u0275elementStart(490, "span", 120);
      \u0275\u0275text(491, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(492, "input", 113);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(493, "div", 98)(494, "div")(495, "label", 51);
      \u0275\u0275text(496, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(497, "textarea", 123);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(498, "div", 100)(499, "button", 101);
      \u0275\u0275text(500, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(501, "button", 102);
      \u0275\u0275text(502, "Add Quantity");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(503, "div", 124)(504, "div", 81)(505, "div", 82)(506, "div", 83)(507, "h4", 84);
      \u0275\u0275text(508, "Add Stock Out");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(509, "button", 85);
      \u0275\u0275element(510, "i", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(511, "form")(512, "div", 86)(513, "div", 10)(514, "label", 51);
      \u0275\u0275text(515, "Item Type");
      \u0275\u0275elementStart(516, "span", 120);
      \u0275\u0275text(517, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(518, "div", 88)(519, "div", 89);
      \u0275\u0275element(520, "input", 125);
      \u0275\u0275elementStart(521, "label", 126);
      \u0275\u0275text(522, " Product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(523, "div", 92);
      \u0275\u0275element(524, "input", 127);
      \u0275\u0275elementStart(525, "label", 128);
      \u0275\u0275text(526, " Service ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(527, "div", 10)(528, "label", 51);
      \u0275\u0275text(529, "Item ");
      \u0275\u0275elementStart(530, "span", 120);
      \u0275\u0275text(531, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(532, "mat-select", 121)(533, "mat-option", 75);
      \u0275\u0275text(534, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "mat-option", 75);
      \u0275\u0275text(536, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "mat-option", 75);
      \u0275\u0275text(538, "Dell XPS 13 9310");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "mat-option", 75);
      \u0275\u0275text(540, "Bose QuietComfort 45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "mat-option", 75);
      \u0275\u0275text(542, "Nike Dri-FIT T-shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(543, "mat-option", 75);
      \u0275\u0275text(544, "Adidas Ultraboost ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "mat-option", 75);
      \u0275\u0275text(546, "Samsung French");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "mat-option", 75);
      \u0275\u0275text(548, "Dyson V15 Detect");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(549, "div", 95)(550, "div", 96)(551, "div", 10)(552, "label", 51);
      \u0275\u0275text(553, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(554, "input", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(555, "div", 96)(556, "div", 10)(557, "label", 51);
      \u0275\u0275text(558, "Units");
      \u0275\u0275elementStart(559, "span", 120);
      \u0275\u0275text(560, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "mat-select", 122)(562, "mat-option", 75);
      \u0275\u0275text(563, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(564, "mat-option", 75);
      \u0275\u0275text(565, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "mat-option", 75);
      \u0275\u0275text(567, "Box");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "mat-option", 75);
      \u0275\u0275text(569, "Gram (g)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(570, "mat-option", 75);
      \u0275\u0275text(571, "Liter (l)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(572, "mat-option", 75);
      \u0275\u0275text(573, "Millimetre (mm)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "mat-option", 75);
      \u0275\u0275text(575, "Milliliter (ml)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(576, "mat-option", 75);
      \u0275\u0275text(577, "Pack (pk)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(578, "mat-option", 75);
      \u0275\u0275text(579, "Piece (pc)");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(580, "div", 98)(581, "div", 10)(582, "label", 51);
      \u0275\u0275text(583, "Quantity");
      \u0275\u0275elementStart(584, "span", 120);
      \u0275\u0275text(585, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(586, "input", 113);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(587, "div", 98)(588, "div")(589, "label", 51);
      \u0275\u0275text(590, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(591, "textarea", 123);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(592, "div", 100)(593, "button", 101);
      \u0275\u0275text(594, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(595, "button", 102);
      \u0275\u0275text(596, "Remove Quantity");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(597, "div", 129)(598, "div", 130)(599, "div", 82)(600, "div", 83)(601, "h4", 84);
      \u0275\u0275text(602, "Inventory History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "button", 85);
      \u0275\u0275element(604, "i", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(605, "div", 86)(606, "div", 131)(607, "div")(608, "h6", 132);
      \u0275\u0275text(609, "Apple iPhone 15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(610, "span", 133);
      \u0275\u0275text(611, "PR00014");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "div", 88)(613, "button", 134);
      \u0275\u0275element(614, "i", 135);
      \u0275\u0275text(615, "Download PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "button", 136);
      \u0275\u0275element(617, "i", 137);
      \u0275\u0275text(618, "Print");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(619, "div", 138)(620, "table", 139)(621, "thead", 36)(622, "tr")(623, "th");
      \u0275\u0275text(624, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "th");
      \u0275\u0275text(626, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "th");
      \u0275\u0275text(628, "Adjustments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "th");
      \u0275\u0275text(630, "Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "th", 37);
      \u0275\u0275text(632, "Reason");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(633, "tbody")(634, "tr")(635, "td")(636, "h6", 140);
      \u0275\u0275text(637, "06 Jan 2025, 04:12 AM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(638, "td", 141);
      \u0275\u0275text(639, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "td", 142);
      \u0275\u0275text(641, "+2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(642, "td");
      \u0275\u0275text(643, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "td", 141);
      \u0275\u0275text(645, "Transfer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(646, "tr")(647, "td")(648, "h6", 140);
      \u0275\u0275text(649, "12 Jan 2025, 06:12 AM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(650, "td", 141);
      \u0275\u0275text(651, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "td", 143);
      \u0275\u0275text(653, "-4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(654, "td");
      \u0275\u0275text(655, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "td", 141);
      \u0275\u0275text(657, "Sale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(658, "tr")(659, "td")(660, "h6", 140);
      \u0275\u0275text(661, "13 Jan 2025, 05:13 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(662, "td", 141);
      \u0275\u0275text(663, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(664, "td", 142);
      \u0275\u0275text(665, "+14");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(666, "td");
      \u0275\u0275text(667, "34");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(668, "td", 141);
      \u0275\u0275text(669, "Sale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(670, "tr")(671, "td")(672, "h6", 140);
      \u0275\u0275text(673, "18 Jan 2025, 08:16 AM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(674, "td", 141);
      \u0275\u0275text(675, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "td", 142);
      \u0275\u0275text(677, "+45");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(678, "td");
      \u0275\u0275text(679, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(680, "td", 141);
      \u0275\u0275text(681, "Sale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(682, "tr")(683, "td")(684, "h6", 140);
      \u0275\u0275text(685, "22 Jan 2025, 09:20 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(686, "td", 141);
      \u0275\u0275text(687, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "td", 143);
      \u0275\u0275text(689, "-2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(690, "td");
      \u0275\u0275text(691, "13");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "td", 141);
      \u0275\u0275text(693, "Damage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(694, "tr")(695, "td")(696, "h6", 140);
      \u0275\u0275text(697, "26 Jan 2025, 04:45 AM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(698, "td", 141);
      \u0275\u0275text(699, "Liter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(700, "td", 142);
      \u0275\u0275text(701, "+55");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(702, "td");
      \u0275\u0275text(703, "67");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "td", 141);
      \u0275\u0275text(705, "Transfer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(706, "tr")(707, "td")(708, "h6", 140);
      \u0275\u0275text(709, "31 Jan 2025, 09:22 APM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(710, "td", 141);
      \u0275\u0275text(711, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(712, "td", 142);
      \u0275\u0275text(713, "+47");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(714, "td");
      \u0275\u0275text(715, "13");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(716, "td", 141);
      \u0275\u0275text(717, "Damage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(718, "tr")(719, "td")(720, "h6", 140);
      \u0275\u0275text(721, "02 Feb 2025, 05:16 AM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(722, "td", 141);
      \u0275\u0275text(723, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(724, "td", 142);
      \u0275\u0275text(725, "+32");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(726, "td");
      \u0275\u0275text(727, "25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "td", 141);
      \u0275\u0275text(729, "Sale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(730, "tr")(731, "td")(732, "h6", 140);
      \u0275\u0275text(733, "04 Feb 2025, 08:12 AM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(734, "td", 141);
      \u0275\u0275text(735, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(736, "td", 143);
      \u0275\u0275text(737, "-6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(738, "td");
      \u0275\u0275text(739, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(740, "td", 141);
      \u0275\u0275text(741, "Damage");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(742, "tr")(743, "td")(744, "h6", 140);
      \u0275\u0275text(745, "06 Feb 2025, 09:22 AM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(746, "td", 141);
      \u0275\u0275text(747, "Piece");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(748, "td", 142);
      \u0275\u0275text(749, "+5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(750, "td");
      \u0275\u0275text(751, "65");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(752, "td", 141);
      \u0275\u0275text(753, "Sale");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(754, "div", 144)(755, "div", 145)(756, "div", 82)(757, "div", 146)(758, "div", 10);
      \u0275\u0275element(759, "img", 147);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(760, "h6", 148);
      \u0275\u0275text(761, "Delete Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(762, "p", 10);
      \u0275\u0275text(763, "Are you sure, you want to delete Inventory?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(764, "div", 149)(765, "a", 150);
      \u0275\u0275text(766, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "a", 151);
      \u0275\u0275text(768, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(71);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 119 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryComponent, [{
    type: Component,
    args: [{ selector: "app-inventory", imports: [MatSelectModule, DateRangePickerComponent, CustomPaginationComponent, MatSortModule, FormsModule, CommonModule], template: '<div class="content-two">\n\n    <!-- Start Breadcrumb -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Inventory</h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <div class="dropdown me-1">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n            <div>\n                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">\n                    <i class="isax isax-add-circle5 me-1"></i>New Inventory\n                </a>\n            </div>\n        </div>\n    </div>\n    <!-- End Breadcrumb -->\n  \n    <!-- Table Search Start -->\n    <div class="mb-3">\n  \n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="table-search d-flex align-items-center mb-0">\n                  <div class="search-input">\n                      <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                      <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                        <label> \n                        <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                      </label>\n                    </div>\n                   </div>\n                </div>\n                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                    <i class="isax isax-filter me-1"></i>Filter\n                </a>\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown me-2">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                        <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu-end">\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">\n                        <i class="isax isax-grid-3 me-1"></i>Column\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu">\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Product/Service</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Code</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Unit</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Quantity</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox" checked>\n                                <span>Selling Price</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox">\n                                <span>Purchase Price</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label class="dropdown-item d-flex align-items-center form-switch">\n                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>\n                                <input class="form-check-input m-0 me-2" type="checkbox">\n                                <span>Status</span>\n                            </label>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Table Search End -->\n  \n    <!-- Table List Start -->\n    <div class="table-responsive">\n      <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n            <thead class="thead-light">\n                <tr>\n                  <th class="no-sort">\n                      <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                          <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                      </div>\n                  </th>\n                    <th class="no-sort">Product/Service</th>\n                    <th class="no-sort">Code</th>\n                    <th class="no-sort">Unit</th>\n                    <th mat-sort-header="qt">Quantity</th>\n                    <th mat-sort-header="sp">Selling Price</th>\n                    <th mat-sort-header="pp">Purchase Price</th>\n                    <th class="no-sort"></th>\n                    <th class="no-sort"></th>\n                </tr>\n            </thead>\n            <tbody>\n              @for (data of tableData;track data){\n                <tr>\n                  <td class="sorting_1">\n                      <div class="form-check form-check-md" >\n                          <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                      </div>\n                  </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                <img src="assets/img/products/{{data.img}}" class="rounded-circle" alt="img">\n                            </a>\n                            <div>\n                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.productService}}</a></h6>\n                            </div>\n                        </div>\n                    </td>\n                    <td>\n                        <a href="javascript:void(0);" class="link-default">{{data.code}}</a>\n                    </td>\n                    <td class="text-dark">{{data.unit}}</td>\n                    <td>{{data.quantity}}</td>\n                    <td class="text-dark">{{data.sellingPrice}}</td>\n                    <td class="text-dark">{{data.purchasePrice}}</td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-primary border-0 d-inline-flex align-items-center me-1 fs-12 fw-regular" data-bs-toggle="modal" data-bs-target="#view_history">\n                                <i class="isax isax-document-sketch5 me-1"></i> History\n                            </a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-success border-0  d-inline-flex align-items-center me-1 fs-12 fw-regular" data-bs-toggle="modal" data-bs-target="#add_stockin">\n                                <i class="isax isax-document-sketch5 me-1"></i> Stock In\n                            </a>\n                            <a href="javascript:void(0);" class="btn btn-sm btn-soft-danger border-0 d-inline-flex align-items-center fs-12 fw-regular" data-bs-toggle="modal" data-bs-target="#add_stockout">\n                                <i class="isax isax-document-sketch5 me-1"></i> Stock Out\n                            </a>\n                        </div>\n                    </td>\n                    <td class="action-item">\n                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                            <i class="fa-solid fa-ellipsis-vertical"></i>\n                        </a>\n                        <ul class="dropdown-menu">\n                            <li>\n                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                            </li>\n                            <li>\n                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                            </li>\n                        </ul>\n                    </td>\n                </tr>\n              }\n              @if(tableData.length === 0){\n                  <tr>\n                    <td colspan="12" class="text-center text-dark">No matching records found</td>\n                  </tr>\n                }\n            </tbody>\n        </table>\n    </div>\n    <app-custom-pagination *ngIf="row"></app-custom-pagination>\n    <!-- Table List End -->\n  \n  </div>\n  \n  \n          <!-- Start Filter -->\n          <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n              <div class="offcanvas-header d-block pb-0">\n                  <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n                      <h6 class="offcanvas-title">Filter</h6>\n                      <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                  </div>\n              </div>\n              <div class="offcanvas-body pt-3">\n                  <form>\n                      <div class="mb-3">\n                          <label class="form-label">Product/Service</label>\n                          <div class="dropdown">\n                              <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n                                  Select\n                              </a>\n                              <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                  <div class="mb-3">\n                                      <div class="input-icon-start position-relative">\n                                          <span class="input-icon-addon fs-12">\n                                              <i class="isax isax-search-normal"></i>\n                                          </span>\n                                          <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                      </div>\n                                  </div>\n                                  <ul class="mb-3">\n                                      <li class="d-flex align-items-center justify-content-between mb-3">\n                                          <label class="d-inline-flex align-items-center text-gray-9">\n                                              <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                          </label>\n                                          <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                                      </li>\n                                      <li>\n                                          <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                              <input class="form-check-input m-0 me-2" type="checkbox">\n                                              <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Apple iPhone 15\n                                          </label>\n                                      </li>\n                                      <li>\n                                          <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                              <input class="form-check-input m-0 me-2" type="checkbox">\n                                              <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-02.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dell XPS 13 9310\n                                          </label>\n                                      </li>\n                                      <li>\n                                          <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                              <input class="form-check-input m-0 me-2" type="checkbox">\n                                              <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-03.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Bose QuietComfort 45\n                                          </label>\n                                      </li>\n                                      <li>\n                                          <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                              <input class="form-check-input m-0 me-2" type="checkbox">\n                                              <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-04.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Nike Dri-FIT T-shirt\n                                          </label>\n                                      </li>\n                                      <li>\n                                          <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                              <input class="form-check-input m-0 me-2" type="checkbox">\n                                              <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-05.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Adidas Ultraboost 22 Running Shoe\n                                          </label>\n                                      </li>\n                                      <li>\n                                          <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                              <input class="form-check-input m-0 me-2" type="checkbox">\n                                              <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/products/product-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Samsung French Door Refrigerator\n                                          </label>\n                                      </li>\n                                  </ul>\n                                  <div class="row g-2">\n                                      <div class="col-6">\n                                          <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n                                      </div>\n                                      <div class="col-6">\n                                          <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class="mb-3">\n                          <label class="form-label">Unit</label>\n                          <mat-select class="custom-mat-select select" placeholder="Select">\n                              <mat-option value="1">Select</mat-option>\n                              <mat-option value="1">Kilograms (Kg)</mat-option>\n                              <mat-option value="1">Gram (g)</mat-option>\n                              <mat-option value="1">Liter (l)</mat-option>\n                              <mat-option value="1">Millimetre (mm)</mat-option>\n                              <mat-option value="1">Milliliter (ml)</mat-option>\n                              <mat-option value="1">Pack (pk)</mat-option>\n                              <mat-option value="1">Piece (pc)</mat-option>\n                          </mat-select>\n                      </div>\n                      <div>\n                          <label class="form-label">Date Range</label>\n                          <div class="filter-daterange">\n                              <app-date-range-picker></app-date-range-picker>\n                          </div>\n                      </div>\n                      <div class="offcanvas-footer">\n                          <div class="row g-2">\n                              <div class="col-6">\n                                  <a href="javascript:void(0);" class="btn btn-outline-white w-100">Reset</a>\n                              </div>\n                              <div class="col-6">\n                                  <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                              </div>\n                          </div>\n                      </div>\n                  </form>\n              </div>\n          </div>\n          <!-- End Filter -->\n  \n          <!--  StartAdd Modal  -->\n          <div id="add_modal" class="modal fade">\n              <div class="modal-dialog modal-dialog-centered">\n                  <div class="modal-content">\n                      <div class="modal-header">\n                          <h4 class="modal-title">Add Inventory</h4>\n                          <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                      </div>\n                      <form >\n                          <div class="modal-body">\n                              <div class="mb-3">\n                                  <label class="form-label">Item Type <span class="text-danger">*</span></label>\n                                  <div class="d-flex align-items-center">\n                                      <div class="form-check me-3">\n                                          <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1" checked>\n                                          <label class="form-check-label" for="Radio-sm-1">\n                                              Product\n                                          </label>\n                                      </div>\n                                      <div class="form-check">\n                                          <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2">\n                                          <label class="form-check-label" for="Radio-sm-2">\n                                              Service\n                                          </label>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class="mb-3">\n                                  <label class="form-label">Item <span class="text-danger">*</span></label>\n                                  <mat-select class="custom-mat-select select" placeholder="Select">\n                                      <mat-option value="1">Select</mat-option>\n                                      <mat-option value="1">Apple iPhone 15</mat-option>\n                                      <mat-option value="1">Dell XPS 13 9310</mat-option>\n                                      <mat-option value="1">Bose QuietComfort 45</mat-option>\n                                      <mat-option value="1">Nike Dri-FIT T-shirt</mat-option>\n                                      <mat-option value="1">Adidas Ultraboost </mat-option>\n                                      <mat-option value="1">Samsung French</mat-option>\n                                      <mat-option value="1">Dyson V15 Detect</mat-option>\n                                  </mat-select>\n                              </div>\n                              <div class="row">\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Code</label>\n                                          <input type="text" class="form-control" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Units</label>\n                                          <input type="text" class="form-control" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Selling Price ($)</label>\n                                          <input type="text" class="form-control" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Purchase Price ($)</label>\n                                          <input type="text" class="form-control" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-12">\n                                      <div class="mb-3">\n                                          <label class="form-label">Quantity <span class="text-danger">*</span></label>\n                                          <input type="text" class="form-control">\n                                      </div>\n                                  </div>\n                                  <div class="col-md-12">\n                                      <div>\n                                          <label class="form-label">Status <span class="text-danger">*</span></label>\n                                          <mat-select class="custom-mat-select select" placeholder="Select">\n                                              <mat-option value="1">Select</mat-option>\n                                              <mat-option value="1">Stock In</mat-option>\n                                              <mat-option value="1">Stock Out</mat-option>\n                                          </mat-select>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                              <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add New</button>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <!-- End Add Modal -->\n  \n          <!-- Start Edit Modal  -->\n          <div id="edit_modal" class="modal fade">\n              <div class="modal-dialog modal-dialog-centered">\n                  <div class="modal-content">\n                      <div class="modal-header">\n                          <h4 class="modal-title">Edit  Category</h4>\n                          <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                      </div>\n                      <form >\n                          <div class="modal-body">\n                              <div class="mb-3">\n                                  <label class="form-label">Item Type <span class="text-danger">*</span></label>\n                                  <div class="d-flex align-items-center">\n                                      <div class="form-check me-3">\n                                          <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-3" checked>\n                                          <label class="form-check-label" for="Radio-sm-3">\n                                              Product\n                                          </label>\n                                      </div>\n                                      <div class="form-check">\n                                          <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-4">\n                                          <label class="form-check-label" for="Radio-sm-4">\n                                              Service\n                                          </label>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class="mb-3">\n                                  <label class="form-label">Item <span class="text-danger">*</span></label>\n                                  <mat-select class="custom-mat-select select" placeholder="Apple iPhone 15">\n                                      <mat-option value="1">Select</mat-option>\n                                      <mat-option value="1">Apple iPhone 15</mat-option>\n                                      <mat-option value="1">Dell XPS 13 9310</mat-option>\n                                      <mat-option value="1">Bose QuietComfort 45</mat-option>\n                                      <mat-option value="1">Nike Dri-FIT T-shirt</mat-option>\n                                      <mat-option value="1">Adidas Ultraboost </mat-option>\n                                      <mat-option value="1">Samsung French</mat-option>\n                                      <mat-option value="1">Dyson V15 Detect</mat-option>\n                                  </mat-select>\n                              </div>\n                              <div class="row">\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Code</label>\n                                          <input type="text" class="form-control" value="PR00025" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Units</label>\n                                          <input type="text" class="form-control" value="Box" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Selling Price ($)</label>\n                                          <input type="text" class="form-control" value="98" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Purchase Price ($)</label>\n                                          <input type="text" class="form-control" value="78" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-12">\n                                      <div class="mb-3">\n                                          <label class="form-label">Quantity <span class="text-danger">*</span></label>\n                                          <input type="text" class="form-control" value="15">\n                                      </div>\n                                  </div>\n                                  <div class="col-md-12">\n                                      <div>\n                                          <label class="form-label">Status <span class="text-danger">*</span></label>\n                                          <mat-select class="custom-mat-select select" placeholder="Stock In">\n                                              <mat-option value="1">Select</mat-option>\n                                              <mat-option value="1">Stock In</mat-option>\n                                              <mat-option value="1">Stock Out</mat-option>\n                                          </mat-select>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                              <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Changes</button>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <!-- End Edit Modal -->\n  \n          <!-- Start Add Stockin Modal  -->\n          <div id="add_stockin" class="modal fade">\n              <div class="modal-dialog modal-dialog-centered">\n                  <div class="modal-content">\n                      <div class="modal-header">\n                          <h4 class="modal-title">Add Stock In</h4>\n                          <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                      </div>\n                      <form >\n                          <div class="modal-body">\n                              <div class="mb-3">\n                                  <label class="form-label">Item Type <span class="text-danger">*</span></label>\n                                  <div class="d-flex align-items-center">\n                                      <div class="form-check me-3">\n                                          <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-5" checked>\n                                          <label class="form-check-label" for="Radio-sm-5">\n                                              Product\n                                          </label>\n                                      </div>\n                                      <div class="form-check">\n                                          <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-6">\n                                          <label class="form-check-label" for="Radio-sm-6">\n                                              Service\n                                          </label>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class="mb-3">\n                                  <label class="form-label">Item<span class="text-danger ms-1">*</span></label>\n                                  <mat-select class="custom-mat-select select" disabled placeholder="Apple iPhone 15">\n                                      <mat-option value="1">Select</mat-option>\n                                      <mat-option value="1">Apple iPhone 15</mat-option>\n                                      <mat-option value="1">Dell XPS 13 9310</mat-option>\n                                      <mat-option value="1">Bose QuietComfort 45</mat-option>\n                                      <mat-option value="1">Nike Dri-FIT T-shirt</mat-option>\n                                      <mat-option value="1">Adidas Ultraboost </mat-option>\n                                      <mat-option value="1">Samsung French</mat-option>\n                                      <mat-option value="1">Dyson V15 Detect</mat-option>\n                                  </mat-select>\n                              </div>\n                              <div class="row">\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Code</label>\n                                          <input type="text" class="form-control" value="PR00025" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Units<span class="text-danger ms-1">*</span></label>\n                                          <mat-select class="custom-mat-select select" placeholder="Box">\n                                              <mat-option value="1">Select</mat-option>\n                                              <mat-option value="1">Select</mat-option>\n                                              <mat-option value="1">Box</mat-option>\n                                              <mat-option value="1">Gram (g)</mat-option>\n                                              <mat-option value="1">Liter (l)</mat-option>\n                                              <mat-option value="1">Millimetre (mm)</mat-option>\n                                              <mat-option value="1">Milliliter (ml)</mat-option>\n                                              <mat-option value="1">Pack (pk)</mat-option>\n                                              <mat-option value="1">Piece (pc)</mat-option>\n                                          </mat-select>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-12">\n                                      <div class="mb-3">\n                                          <label class="form-label">Quantity<span class="text-danger ms-1">*</span></label>\n                                          <input type="text" class="form-control" value="15">\n                                      </div>\n                                  </div>\n                                  <div class="col-md-12">\n                                      <div>\n                                          <label class="form-label">Notes</label>\n                                          <textarea class="form-control" rows="2"></textarea>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                              <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add Quantity</button>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <!-- End Add Stockin Modal -->\n  \n          <!-- Start Add Stockout Modal  -->\n          <div id="add_stockout" class="modal fade">\n              <div class="modal-dialog modal-dialog-centered">\n                  <div class="modal-content">\n                      <div class="modal-header">\n                          <h4 class="modal-title">Add Stock Out</h4>\n                          <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                      </div>\n                      <form >\n                          <div class="modal-body">\n                              <div class="mb-3">\n                                  <label class="form-label">Item Type<span class="text-danger ms-1">*</span></label>\n                                  <div class="d-flex align-items-center">\n                                      <div class="form-check me-3">\n                                          <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-7" checked>\n                                          <label class="form-check-label" for="Radio-sm-7">\n                                              Product\n                                          </label>\n                                      </div>\n                                      <div class="form-check">\n                                          <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-8">\n                                          <label class="form-check-label" for="Radio-sm-8">\n                                              Service\n                                          </label>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class="mb-3">\n                                  <label class="form-label">Item <span class="text-danger ms-1">*</span></label>\n                                  <mat-select class="custom-mat-select select" disabled placeholder="Apple iPhone 15">\n                                      <mat-option value="1">Select</mat-option>\n                                      <mat-option value="1">Apple iPhone 15</mat-option>\n                                      <mat-option value="1">Dell XPS 13 9310</mat-option>\n                                      <mat-option value="1">Bose QuietComfort 45</mat-option>\n                                      <mat-option value="1">Nike Dri-FIT T-shirt</mat-option>\n                                      <mat-option value="1">Adidas Ultraboost </mat-option>\n                                      <mat-option value="1">Samsung French</mat-option>\n                                      <mat-option value="1">Dyson V15 Detect</mat-option>\n                                  </mat-select>\n                              </div>\n                              <div class="row">\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Code</label>\n                                          <input type="text" class="form-control" value="PR00025" readonly>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-6">\n                                      <div class="mb-3">\n                                          <label class="form-label">Units<span class="text-danger ms-1">*</span></label>\n                                          <mat-select class="custom-mat-select select" placeholder="Box">\n                                              <mat-option value="1">Select</mat-option>\n                                              <mat-option value="1">Select</mat-option>\n                                              <mat-option value="1">Box</mat-option>\n                                              <mat-option value="1">Gram (g)</mat-option>\n                                              <mat-option value="1">Liter (l)</mat-option>\n                                              <mat-option value="1">Millimetre (mm)</mat-option>\n                                              <mat-option value="1">Milliliter (ml)</mat-option>\n                                              <mat-option value="1">Pack (pk)</mat-option>\n                                              <mat-option value="1">Piece (pc)</mat-option>\n                                          </mat-select>\n                                      </div>\n                                  </div>\n                                  <div class="col-md-12">\n                                      <div class="mb-3">\n                                          <label class="form-label">Quantity<span class="text-danger ms-1">*</span></label>\n                                          <input type="text" class="form-control" value="15">\n                                      </div>\n                                  </div>\n                                  <div class="col-md-12">\n                                      <div>\n                                          <label class="form-label">Notes</label>\n                                          <textarea class="form-control" rows="2"></textarea>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                              <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Remove Quantity</button>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <!-- End Add Stockout Modal -->\n  \n          <!-- Start View History Modal  -->\n          <div id="view_history" class="modal fade">\n              <div class="modal-dialog modal-dialog-centered modal-lg">\n                  <div class="modal-content">\n                      <div class="modal-header">\n                          <h4 class="modal-title">Inventory History</h4>\n                          <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                      </div>\n                      <div class="modal-body">\n                          <div class="bg-light d-flex align-items-center justify-content-between flex-wrap row-gap-3 p-3 rounded mb-3">\n                              <div>\n                                  <h6 class="fs-14 fw-semibold mb-1">Apple iPhone 15</h6>\n                                  <span class="text-primary">PR00014</span>\n                              </div>\n                              <div class="d-flex align-items-center">\n                                  <button type="button" class="btn btn-outline-white me-3"><i class="isax isax-document-like me-1"></i>Download PDF</button>\n                                  <button type="button" class="btn btn-outline-white"><i class="isax isax-printer me-1"></i>Print</button>\n                              </div>\n                          </div>\n                          <!-- Table List -->\n                          <div class="table-responsive border border-bottom-0">\n                              <table class="table">\n                                  <thead class="thead-light">\n                                      <tr>\n                                          <th>Date</th>\n                                          <th>Unit</th>\n                                          <th>Adjustments</th>\n                                          <th>Stock</th>\n                                          <th class="no-sort">Reason</th>\n                                      </tr>\n                                  </thead>\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">06 Jan 2025, 04:12 AM</h6>\n                                          </td>\n                                          <td class="text-dark">Piece</td>\n                                          <td class="text-success fw-medium">+2</td>\n                                          <td>2</td>\n                                          <td class="text-dark">Transfer</td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">12 Jan 2025, 06:12 AM</h6>\n                                          </td>\n                                          <td class="text-dark">Piece</td>\n                                          <td class="text-danger fw-medium">-4</td>\n                                          <td>12</td>\n                                          <td class="text-dark">Sale</td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">13 Jan 2025, 05:13 PM</h6>\n                                          </td>\n                                          <td class="text-dark">Piece</td>\n                                          <td class="text-success fw-medium">+14</td>\n                                          <td>34</td>\n                                          <td class="text-dark">Sale</td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">18 Jan 2025, 08:16 AM</h6>\n                                          </td>\n                                          <td class="text-dark">Pack</td>\n                                          <td class="text-success fw-medium">+45</td>\n                                          <td>24</td>\n                                          <td class="text-dark">Sale</td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">22 Jan 2025, 09:20 PM</h6>\n                                          </td>\n                                          <td class="text-dark">Pack</td>\n                                          <td class="text-danger fw-medium">-2</td>\n                                          <td>13</td>\n                                          <td class="text-dark">Damage</td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">26 Jan 2025, 04:45 AM</h6>\n                                          </td>\n                                          <td class="text-dark">Liter</td>\n                                          <td class="text-success fw-medium">+55</td>\n                                          <td>67</td>\n                                          <td class="text-dark">Transfer</td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">31 Jan 2025, 09:22 APM</h6>\n                                          </td>\n                                          <td class="text-dark">Piece</td>\n                                          <td class="text-success fw-medium">+47</td>\n                                          <td>13</td>\n                                          <td class="text-dark">Damage</td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">02 Feb 2025, 05:16 AM</h6>\n                                          </td>\n                                          <td class="text-dark">Piece</td>\n                                          <td class="text-success fw-medium">+32</td>\n                                          <td>25</td>\n                                          <td class="text-dark">Sale</td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">04 Feb 2025, 08:12 AM</h6>\n                                          </td>\n                                          <td class="text-dark">Piece</td>\n                                          <td class="text-danger fw-medium">-6</td>\n                                          <td>24</td>\n                                          <td class="text-dark">Damage</td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <h6 class="fw-medium fs-14">06 Feb 2025, 09:22 AM</h6>\n                                          </td>\n                                          <td class="text-dark">Piece</td>\n                                          <td class="text-success fw-medium">+5</td>\n                                          <td>65</td>\n                                          <td class="text-dark">Sale</td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <!-- /Table List -->\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <!-- End View History Modal -->\n  \n          <!-- Start Delete Modal  -->\n          <div class="modal fade" id="delete_modal">\n              <div class="modal-dialog modal-dialog-centered modal-sm">\n                  <div class="modal-content">\n                      <div class="modal-body text-center">\n                          <div class="mb-3">\n                              <img src="assets/img/icons/delete.svg" alt="img">\n                          </div>\n                          <h6 class="mb-1">Delete Inventory</h6>\n                          <p class="mb-3">Are you sure, you want to delete Inventory?</p>\n                          <div class="d-flex justify-content-center">\n                              <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                              <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <!-- End Delete Modal  -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "src/app/features/invantory-sales/inventory/inventory.component.ts", lineNumber: 19 });
})();
export {
  InventoryComponent
};
//# sourceMappingURL=chunk-SGGT4EGR.js.map
