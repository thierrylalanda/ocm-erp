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
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
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

// src/app/features/invantory-sales/delivery-challans/delivery-challan-list/delivery-challan-list.component.ts
var _c0 = () => ({ standalone: true });
function DeliveryChallanListComponent_For_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 93)(2, "div", 94)(3, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function DeliveryChallanListComponent_For_85_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "a", 96);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 97)(9, "a", 98);
    \u0275\u0275element(10, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h6", 100)(13, "a", 101);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "td", 102);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 103)(22, "a", 104);
    \u0275\u0275element(23, "i", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ul", 6)(25, "li")(26, "a", 106);
    \u0275\u0275element(27, "i", 107);
    \u0275\u0275text(28, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "li")(30, "a", 108);
    \u0275\u0275element(31, "i", 109);
    \u0275\u0275text(32, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 110);
    \u0275\u0275element(35, "i", 111);
    \u0275\u0275text(36, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li")(38, "a", 106);
    \u0275\u0275element(39, "i", 112);
    \u0275\u0275text(40, "Convert to Invoice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "li")(42, "a", 106);
    \u0275\u0275element(43, "i", 113);
    \u0275\u0275text(44, "Send");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "li")(46, "a", 106);
    \u0275\u0275element(47, "i", 114);
    \u0275\u0275text(48, "Clone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "li")(50, "a", 106);
    \u0275\u0275element(51, "i", 115);
    \u0275\u0275text(52, "Download");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.challanId);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/profiles/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", ctx_r2.routes.editDeliveryChallan);
  }
}
function DeliveryChallanListComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 116);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function DeliveryChallanListComponent_app_custom_pagination_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var DeliveryChallanListComponent = class _DeliveryChallanListComponent {
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
    this.data.getDeliverychallan().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.deliveryChallanList) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getDeliverychallan().subscribe((apiRes) => {
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
  static \u0275fac = function DeliveryChallanListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeliveryChallanListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryChallanListComponent, selectors: [["app-delivery-challan-list"]], decls: 232, vars: 7, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "customer"], ["mat-sort-header", "amount"], ["mat-sort-header", "category"], ["mat-sort-header", "createdon"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], ["for", "dateRangePicker", 1, "form-label"], [1, "filter-daterange"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-info", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-dark", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-default"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "text-dark"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-eye", "me-2"], [1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], [1, "isax", "isax-document-text-1", "me-2"], [1, "isax", "isax-send-2", "me-2"], [1, "isax", "isax-copy", "me-2"], [1, "isax", "isax-document-download", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function DeliveryChallanListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Delivery Challans");
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
      \u0275\u0275text(20, "New Delivery Challan ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function DeliveryChallanListComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DeliveryChallanListComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(48, "div", 26)(49, "h6", 27);
      \u0275\u0275text(50, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 28)(52, "span", 29);
      \u0275\u0275text(53, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, "Customers Selected");
      \u0275\u0275elementStart(55, "span", 30);
      \u0275\u0275element(56, "i", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "span", 28)(58, "span", 29);
      \u0275\u0275text(59, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, "Status Selected");
      \u0275\u0275elementStart(61, "span", 30);
      \u0275\u0275element(62, "i", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "a", 32);
      \u0275\u0275text(64, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 33)(66, "table", 34);
      \u0275\u0275listener("matSortChange", function DeliveryChallanListComponent_Template_table_matSortChange_66_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(67, "thead", 35)(68, "tr")(69, "th", 36)(70, "div", 37);
      \u0275\u0275listener("click", function DeliveryChallanListComponent_Template_div_click_70_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(71, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function DeliveryChallanListComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "th", 36);
      \u0275\u0275text(73, "Challan ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 39);
      \u0275\u0275text(75, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 40);
      \u0275\u0275text(77, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 41);
      \u0275\u0275text(79, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 42);
      \u0275\u0275text(81, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275element(82, "th", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "tbody");
      \u0275\u0275repeaterCreate(84, DeliveryChallanListComponent_For_85_Template, 53, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(86, DeliveryChallanListComponent_Conditional_86_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(87, DeliveryChallanListComponent_app_custom_pagination_87_Template, 1, 0, "app-custom-pagination", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 44)(89, "div", 45)(90, "div", 46)(91, "h6", 47);
      \u0275\u0275text(92, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 48);
      \u0275\u0275element(94, "i", 49);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "div", 50)(96, "form", 51)(97, "div", 10)(98, "label", 52);
      \u0275\u0275text(99, "Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div", 53)(101, "a", 54);
      \u0275\u0275text(102, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 55)(104, "div", 10)(105, "div", 56)(106, "span", 57);
      \u0275\u0275element(107, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275element(108, "input", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "ul", 10)(110, "li", 60)(111, "label", 61);
      \u0275\u0275element(112, "input", 62);
      \u0275\u0275text(113, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "a", 63);
      \u0275\u0275text(115, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "li")(117, "label", 64);
      \u0275\u0275element(118, "input", 65);
      \u0275\u0275elementStart(119, "span", 66);
      \u0275\u0275element(120, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275text(121, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "li")(123, "label", 64);
      \u0275\u0275element(124, "input", 65);
      \u0275\u0275elementStart(125, "span", 66);
      \u0275\u0275element(126, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275text(127, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "li")(129, "label", 64);
      \u0275\u0275element(130, "input", 65);
      \u0275\u0275elementStart(131, "span", 66);
      \u0275\u0275element(132, "img", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "li")(135, "label", 64);
      \u0275\u0275element(136, "input", 65);
      \u0275\u0275elementStart(137, "span", 66);
      \u0275\u0275element(138, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 71)(141, "div", 72)(142, "a", 73);
      \u0275\u0275text(143, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 72)(145, "a", 74);
      \u0275\u0275text(146, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(147, "div", 10)(148, "label", 75);
      \u0275\u0275text(149, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 76);
      \u0275\u0275element(151, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 10)(153, "label", 52);
      \u0275\u0275text(154, "Challan Id");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 53)(156, "a", 54);
      \u0275\u0275text(157, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 55)(159, "div", 10)(160, "div", 56)(161, "span", 57);
      \u0275\u0275element(162, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275element(163, "input", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "ul", 10)(165, "li")(166, "label", 64);
      \u0275\u0275element(167, "input", 65);
      \u0275\u0275text(168, " CH0014 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "li")(170, "label", 64);
      \u0275\u0275element(171, "input", 65);
      \u0275\u0275text(172, " CH0013 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "li")(174, "label", 64);
      \u0275\u0275element(175, "input", 65);
      \u0275\u0275text(176, " CH0012 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "li")(178, "label", 64);
      \u0275\u0275element(179, "input", 65);
      \u0275\u0275text(180, " CH0011 ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(181, "div", 10)(182, "label", 52);
      \u0275\u0275text(183, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "div", 53)(185, "a", 54);
      \u0275\u0275text(186, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 55)(188, "ul", 10)(189, "li")(190, "label", 64);
      \u0275\u0275element(191, "input", 65)(192, "i", 77);
      \u0275\u0275text(193, "Accepted ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "li")(195, "label", 64);
      \u0275\u0275element(196, "input", 65)(197, "i", 78);
      \u0275\u0275text(198, "Declined ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "li")(200, "label", 64);
      \u0275\u0275element(201, "input", 65)(202, "i", 79);
      \u0275\u0275text(203, "Sent ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "li")(205, "label", 64);
      \u0275\u0275element(206, "input", 65)(207, "i", 80);
      \u0275\u0275text(208, "Expired ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(209, "div", 81)(210, "div", 71)(211, "div", 72)(212, "a", 82);
      \u0275\u0275text(213, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "div", 72)(215, "button", 83);
      \u0275\u0275text(216, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(217, "div", 84)(218, "div", 85)(219, "div", 86)(220, "div", 87)(221, "div", 10);
      \u0275\u0275element(222, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "h6", 89);
      \u0275\u0275text(224, "Delete Delivery Challan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "p", 10);
      \u0275\u0275text(226, "Are you sure, you want to delete Delivery Challan?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "div", 90)(228, "a", 91);
      \u0275\u0275text(229, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "a", 92);
      \u0275\u0275text(231, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.addDeliveryChallan);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(41);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 86 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [DateRangePickerComponent, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeliveryChallanListComponent, [{
    type: Component,
    args: [{ selector: "app-delivery-challan-list", imports: [DateRangePickerComponent, CustomPaginationComponent, MatSortModule, CommonModule, FormsModule, RouterLink], template: '			<!-- Start Container -->\n            <div class="content-two">\n\n                <!-- Page Header -->\n                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n                    <div>\n                        <h6>Delivery Challans</h6>\n                    </div>\n                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n                        <div class="dropdown me-1">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                <i class="isax isax-export-1 me-1"></i>Export\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div>\n                            <a [routerLink]="routes.addDeliveryChallan" class="btn btn-primary d-flex align-items-center">\n                                <i class="isax isax-add-circle5 me-1"></i>New Delivery Challan\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Page Header -->\n\n                <!-- Table Search Start -->\n                <div class="mb-3">\n                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="table-search d-flex align-items-center mb-0">\n                                <div class="search-input">\n                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                                      <label> \n                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                                    </label>\n                                  </div>\n                                 </div>\n                            </div>\n                            <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                                <i class="isax isax-filter me-1"></i>Filter\n                            </a>\n                        </div>\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="dropdown me-2">\n                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                    <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                                </a>\n                                <ul class="dropdown-menu  dropdown-menu-end">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Filter Info -->\n                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3">\n                        <h6 class="fs-13 fw-semibold">Filters</h6>\n                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Customers Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">2</span>Status Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>\n                    </div>\n                    <!-- /Filter Info -->\n                </div>\n                <!-- Table Search End -->\n\n\n                <!-- Table List Start -->\n                <div class="table-responsive">\n                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n                        <thead class="thead-light">\n                            <tr>\n                                <th class="no-sort">\n                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                                    </div>\n                                </th>\n                                <th class="no-sort">Challan ID</th>\n                                <th mat-sort-header="customer">Customer</th>\n                                <th mat-sort-header="amount">Amount</th>\n                                <th mat-sort-header="category">Category</th>\n                                <th mat-sort-header="createdon">Created On</th>\n                                <th class="no-sort"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            @for (data of tableData;track data){\n                            <tr>\n                                <td class="sorting_1">\n                                    <div class="form-check form-check-md" >\n                                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                                    </div>\n                                </td>\n                                <td>\n                                    <a href="javascript:void(0);" class="link-default">{{data.challanId}}</a>\n                                </td>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.customer}}</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">{{data.amount}}</td>\n                                <td>{{data.category}}</td>\n                                <td>{{data.createdOn}}</td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-eye me-2"></i>View</a>\n                                        </li>\n                                        <li>\n                                            <a [routerLink]="routes.editDeliveryChallan" class="dropdown-item d-flex align-items-center"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-text-1 me-2"></i>Convert to Invoice</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-send-2 me-2"></i>Send</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-copy me-2"></i>Clone</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center"><i class="isax isax-document-download me-2"></i>Download</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        }\n                        @if(tableData.length === 0){\n                            <tr>\n                              <td colspan="12" class="text-center text-dark">No matching records found</td>\n                            </tr>\n                          }\n                        </tbody>\n                    </table>\n                </div>\n                <app-custom-pagination *ngIf="row"/>\n                <!-- Table List End -->\n\n            </div>\n			<!-- container -->\n\n\n                    <!-- Start Filter -->\n        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n            <div class="offcanvas-header d-block pb-0">\n                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n                    <h6 class="offcanvas-title">Filter</h6>\n                    <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                </div>\n            </div>\n            <div class="offcanvas-body pt-3">\n                <form action="#">\n                    <div class="mb-3">\n                        <label class="form-label">Customers</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="mb-3">\n                                    <div class="input-icon-start position-relative">\n                                        <span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n                                        <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                    </div>\n                                </div>\n                                <ul class="mb-3">\n                                    <li class="d-flex align-items-center justify-content-between mb-3">\n                                        <label class="d-inline-flex align-items-center text-gray-9">\n                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                        </label>\n                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-29.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White\n                                        </label>\n                                    </li>\n                                </ul>\n                                <div class="row g-2">\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>\n                                    </div>\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <label for="dateRangePicker" class="form-label">Date Range</label>\n                        <div class="filter-daterange">\n                            <app-date-range-picker></app-date-range-picker>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <label class="form-label">Challan Id</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="mb-3">\n                                    <div class="input-icon-start position-relative">\n                                        <span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n                                        <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                    </div>\n                                </div>\n                                <ul class="mb-3">\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> CH0014\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> CH0013\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> CH0012\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox"> CH0011\n                                        </label>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="mb-3">\n                        <label class="form-label">Status</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <ul class="mb-3">\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Accepted\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Declined\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <i class="fa-solid fa-circle fs-6 text-info me-1"></i>Sent\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <i class="fa-solid fa-circle fs-6 text-dark me-1"></i>Expired\n                                        </label>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="offcanvas-footer">\n                        <div class="row g-2">\n                            <div class="col-6">\n                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>\n                            </div>\n                            <div class="col-6">\n                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <!-- /Filter End -->\n\n        <!-- Delete Modal Start -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Delivery Challan</h6>\n                        <p class="mb-3">Are you sure, you want to delete Delivery Challan?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Delete Modal End -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryChallanListComponent, { className: "DeliveryChallanListComponent", filePath: "src/app/features/invantory-sales/delivery-challans/delivery-challan-list/delivery-challan-list.component.ts", lineNumber: 19 });
})();
export {
  DeliveryChallanListComponent
};
//# sourceMappingURL=chunk-BK5NH5CJ.js.map
