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
  Router,
  RouterLink
} from "./chunk-WOBWH5QA.js";
import "./chunk-KYBWVUSB.js";
import "./chunk-ZCJVS2AD.js";
import {
  CommonModule,
  NgClass,
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

// src/app/features/content/testimonials/testimonials.component.ts
var _c0 = () => ({ standalone: true });
function TestimonialsComponent_For_68_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 48)(1, "i", 47)(2, "i", 47)(3, "i", 47)(4, "i", 47);
  }
}
function TestimonialsComponent_For_68_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 48)(1, "i", 48)(2, "i", 47)(3, "i", 47)(4, "i", 47);
  }
}
function TestimonialsComponent_For_68_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 47)(1, "i", 47)(2, "i", 47)(3, "i", 47)(4, "i", 47);
  }
}
function TestimonialsComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 120)(2, "div", 121)(3, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function TestimonialsComponent_For_68_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 72)(6, "a", 123);
    \u0275\u0275element(7, "img", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 125)(10, "a", 126);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275conditionalCreate(13, TestimonialsComponent_For_68_Conditional_13_Template, 5, 0)(14, TestimonialsComponent_For_68_Conditional_14_Template, 5, 0)(15, TestimonialsComponent_For_68_Conditional_15_Template, 5, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "div", 72)(22, "a", 127);
    \u0275\u0275element(23, "i", 128);
    \u0275\u0275text(24, " active ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "td", 129)(26, "a", 130);
    \u0275\u0275element(27, "i", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul", 6)(29, "li")(30, "a", 132);
    \u0275\u0275element(31, "i", 133);
    \u0275\u0275text(32, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 134);
    \u0275\u0275element(35, "i", 135);
    \u0275\u0275text(36, "Delete");
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
    \u0275\u0275conditional(data_r2.rating === "1" ? 13 : data_r2.rating === "2" ? 14 : 15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", data_r2.status === "active" ? " badge-soft-success " : " badge-soft-danger");
  }
}
function TestimonialsComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 136);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function TestimonialsComponent_app_custom_pagination_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var TestimonialsComponent = class _TestimonialsComponent {
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
    this.data.getTestimonials().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.testimonials) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getTestimonials().subscribe((apiRes) => {
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
  static \u0275fac = function TestimonialsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialsComponent, selectors: [["app-testimonials"]], decls: 655, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["mat-sort-header", "date"], ["mat-sort-header", "status"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "isax", "isax-star-15", "text-warning", "me-1"], [1, "isax", "isax-star-15", "text-warning"], [1, "isax", "isax-star-15"], [1, "isax", "isax-star-15", "me-1"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100", "close-filter"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "input-group", "position-relative"], ["type", "text", 1, "form-control", "date-range", "bookingrange", "rounded-end"], [1, "input-icon-addon", "fs-16", "text-gray-9"], [1, "isax", "isax-calendar-2"], [1, "mb-0"], [1, "fa-solid", "fa-circle", "fs-6", "text-success", "me-1"], [1, "fa-solid", "fa-circle", "fs-6", "text-danger", "me-1"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "text-gray-9", "fw-bold", "mb-2", "d-flex"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "border", "border-dashed", "bg-light", "me-3", "flex-shrink-0"], [1, "isax", "isax-image", "text-primary", "fs-24"], [1, "d-inline-flex", "flex-column", "align-items-start"], [1, "drag-upload-btn", "btn", "btn-sm", "btn-primary", "position-relative", "mb-2"], [1, "isax", "isax-image", "me-1"], ["type", "file", "multiple", "", 1, "form-control", "image-sign"], [1, "text-gray-9"], [1, "row"], [1, "col-md-6"], [1, "text-danger"], ["type", "text", 1, "form-control"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "col-md-12"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], [1, "position-relative", "d-flex", "align-items-center"], ["src", "assets/img/products/product-05.jpg", "alt", "User Img", 1, "avatar", "avatar-xl"], ["href", "javascript:void(0);", 1, "rounded-trash", "trash-top", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-trash"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-06.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "filter-daterange"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["src", "assets/img/products/product-05.jpg", "alt", "", 1, "avatar", "avatar-xl"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "routerLink"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], [3, "routerLink"], ["href", "javascript:void(0);", 1, "badge", "badge-sm", "d-inline-flex", "align-items-center", "me-1", 3, "ngClass"], [1, "isax", "isax-document-sketch5", "me-1"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Testimonials");
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
      \u0275\u0275text(20, "New Testimonials ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function TestimonialsComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function TestimonialsComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275listener("matSortChange", function TestimonialsComponent_Template_table_matSortChange_49_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(50, "thead", 28)(51, "tr")(52, "th", 29)(53, "div", 30);
      \u0275\u0275listener("click", function TestimonialsComponent_Template_div_click_53_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(54, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function TestimonialsComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "th", 29);
      \u0275\u0275text(56, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 29);
      \u0275\u0275text(58, "Rating");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 29);
      \u0275\u0275text(60, "Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 32);
      \u0275\u0275text(62, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 33);
      \u0275\u0275text(64, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "th", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "tbody");
      \u0275\u0275repeaterCreate(67, TestimonialsComponent_For_68_Template, 37, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(69, TestimonialsComponent_Conditional_69_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(70, TestimonialsComponent_app_custom_pagination_70_Template, 1, 0, "app-custom-pagination", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 35)(72, "div", 36)(73, "div", 37)(74, "h6", 38);
      \u0275\u0275text(75, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "button", 39);
      \u0275\u0275element(77, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 10)(79, "label", 41);
      \u0275\u0275text(80, "Ratings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 21)(82, "a", 42);
      \u0275\u0275text(83, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 43)(85, "ul", 10)(86, "li")(87, "label", 44);
      \u0275\u0275element(88, "input", 45)(89, "i", 46)(90, "i", 46)(91, "i", 46)(92, "i", 46)(93, "i", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "li")(95, "label", 44);
      \u0275\u0275element(96, "input", 45)(97, "i", 46)(98, "i", 46)(99, "i", 46)(100, "i", 46)(101, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "li")(103, "label", 44);
      \u0275\u0275element(104, "input", 45)(105, "i", 46)(106, "i", 46)(107, "i", 46)(108, "i", 49)(109, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "li")(111, "label", 44);
      \u0275\u0275element(112, "input", 45)(113, "i", 46)(114, "i", 46)(115, "i", 49)(116, "i", 49)(117, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "li")(119, "label", 44);
      \u0275\u0275element(120, "input", 45)(121, "i", 46)(122, "i", 49)(123, "i", 49)(124, "i", 49)(125, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "div", 50)(127, "div", 51)(128, "a", 52);
      \u0275\u0275text(129, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 51)(131, "a", 53);
      \u0275\u0275text(132, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(133, "div", 10)(134, "label", 41);
      \u0275\u0275text(135, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 54);
      \u0275\u0275element(137, "input", 55);
      \u0275\u0275elementStart(138, "span", 56);
      \u0275\u0275element(139, "i", 57);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "div", 58)(141, "label", 41);
      \u0275\u0275text(142, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 21)(144, "a", 42);
      \u0275\u0275text(145, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 43)(147, "ul")(148, "li")(149, "label", 44);
      \u0275\u0275element(150, "input", 45)(151, "i", 59);
      \u0275\u0275text(152, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "li")(154, "label", 44);
      \u0275\u0275element(155, "input", 45)(156, "i", 60);
      \u0275\u0275text(157, "Inactive ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(158, "div", 61)(159, "div", 50)(160, "div", 51)(161, "a", 62);
      \u0275\u0275text(162, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 51)(164, "button", 63);
      \u0275\u0275text(165, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(166, "div", 64)(167, "div", 65)(168, "div", 66)(169, "div", 67)(170, "h4", 68);
      \u0275\u0275text(171, "Add New Testimonial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "button", 69);
      \u0275\u0275element(173, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "form")(175, "div", 70)(176, "div", 10)(177, "span", 71);
      \u0275\u0275text(178, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 72)(180, "div", 73);
      \u0275\u0275element(181, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 75)(183, "div", 76);
      \u0275\u0275element(184, "i", 77);
      \u0275\u0275text(185, "Upload Image ");
      \u0275\u0275element(186, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "span", 79);
      \u0275\u0275text(188, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(189, "div", 80)(190, "div", 81)(191, "div", 10)(192, "label", 41);
      \u0275\u0275text(193, "Customer");
      \u0275\u0275elementStart(194, "span", 82);
      \u0275\u0275text(195, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(196, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "div", 81)(198, "div", 10)(199, "label", 41);
      \u0275\u0275text(200, "Date");
      \u0275\u0275elementStart(201, "span", 82);
      \u0275\u0275text(202, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(203, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "div", 81)(205, "div", 10)(206, "label", 41);
      \u0275\u0275text(207, "Rating");
      \u0275\u0275elementStart(208, "span", 82);
      \u0275\u0275text(209, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "mat-select", 84)(211, "mat-option", 85);
      \u0275\u0275text(212, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "mat-option", 85);
      \u0275\u0275text(214, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "mat-option", 85);
      \u0275\u0275text(216, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "mat-option", 85);
      \u0275\u0275text(218, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "mat-option", 85);
      \u0275\u0275text(220, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "mat-option", 85);
      \u0275\u0275text(222, "1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(223, "div", 81)(224, "div", 10)(225, "label", 41);
      \u0275\u0275text(226, "Status ");
      \u0275\u0275elementStart(227, "span", 82);
      \u0275\u0275text(228, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "mat-select", 84)(230, "mat-option", 85);
      \u0275\u0275text(231, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "mat-option", 85);
      \u0275\u0275text(233, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "mat-option", 85);
      \u0275\u0275text(235, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(236, "div", 86)(237, "div", 58)(238, "label", 41);
      \u0275\u0275text(239, "Content");
      \u0275\u0275elementStart(240, "span", 82);
      \u0275\u0275text(241, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(242, "input", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(243, "div", 87)(244, "button", 88);
      \u0275\u0275text(245, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "button", 89);
      \u0275\u0275text(247, "Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(248, "div", 90)(249, "div", 65)(250, "div", 66)(251, "div", 67)(252, "h4", 68);
      \u0275\u0275text(253, "Edit Testimonial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "button", 69);
      \u0275\u0275element(255, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "form")(257, "div", 70)(258, "div", 10)(259, "span", 71);
      \u0275\u0275text(260, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "div", 72)(262, "div", 73)(263, "div", 91);
      \u0275\u0275element(264, "img", 92);
      \u0275\u0275elementStart(265, "a", 93);
      \u0275\u0275element(266, "i", 94);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "div", 75)(268, "div", 76);
      \u0275\u0275element(269, "i", 77);
      \u0275\u0275text(270, "Upload Image ");
      \u0275\u0275element(271, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "span", 79);
      \u0275\u0275text(273, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(274, "div", 80)(275, "div", 81)(276, "div", 10)(277, "label", 41);
      \u0275\u0275text(278, "Customer");
      \u0275\u0275elementStart(279, "span", 82);
      \u0275\u0275text(280, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(281, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "div", 81)(283, "div", 10)(284, "label", 41);
      \u0275\u0275text(285, "Date");
      \u0275\u0275elementStart(286, "span", 82);
      \u0275\u0275text(287, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(288, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "div", 81)(290, "div", 10)(291, "label", 41);
      \u0275\u0275text(292, "Rating");
      \u0275\u0275elementStart(293, "span", 82);
      \u0275\u0275text(294, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "mat-select", 84)(296, "mat-option", 85);
      \u0275\u0275text(297, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "mat-option", 85);
      \u0275\u0275text(299, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "mat-option", 85);
      \u0275\u0275text(301, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "mat-option", 85);
      \u0275\u0275text(303, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "mat-option", 85);
      \u0275\u0275text(305, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "mat-option", 85);
      \u0275\u0275text(307, "1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(308, "div", 81)(309, "div", 10)(310, "label", 41);
      \u0275\u0275text(311, "Status ");
      \u0275\u0275elementStart(312, "span", 82);
      \u0275\u0275text(313, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "mat-select", 84)(315, "mat-option", 85);
      \u0275\u0275text(316, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "mat-option", 85);
      \u0275\u0275text(318, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "mat-option", 85);
      \u0275\u0275text(320, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(321, "div", 86)(322, "div", 58)(323, "label", 41);
      \u0275\u0275text(324, "Content");
      \u0275\u0275elementStart(325, "span", 82);
      \u0275\u0275text(326, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(327, "input", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(328, "div", 87)(329, "button", 88);
      \u0275\u0275text(330, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "button", 89);
      \u0275\u0275text(332, "Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(333, "div", 95)(334, "div", 96)(335, "div", 66)(336, "div", 97)(337, "div", 10)(338, "label", 41);
      \u0275\u0275text(339, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "div", 21)(341, "a", 42);
      \u0275\u0275text(342, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "div", 43)(344, "div", 10)(345, "div", 98)(346, "span", 99);
      \u0275\u0275element(347, "i", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275element(348, "input", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(349, "ul", 10)(350, "li", 102)(351, "label", 103);
      \u0275\u0275element(352, "input", 104);
      \u0275\u0275text(353, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "a", 105);
      \u0275\u0275text(355, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(356, "li")(357, "label", 44);
      \u0275\u0275element(358, "input", 45);
      \u0275\u0275elementStart(359, "span", 106);
      \u0275\u0275element(360, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275text(361, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(362, "li")(363, "label", 44);
      \u0275\u0275element(364, "input", 45);
      \u0275\u0275elementStart(365, "span", 106);
      \u0275\u0275element(366, "img", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275text(367, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(368, "li")(369, "label", 44);
      \u0275\u0275element(370, "input", 45);
      \u0275\u0275elementStart(371, "span", 106);
      \u0275\u0275element(372, "img", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275text(373, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "li")(375, "label", 44);
      \u0275\u0275element(376, "input", 45);
      \u0275\u0275elementStart(377, "span", 106);
      \u0275\u0275element(378, "img", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275text(379, "Sophia White ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(380, "div", 50)(381, "div", 51)(382, "a", 52);
      \u0275\u0275text(383, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "div", 51)(385, "a", 53);
      \u0275\u0275text(386, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(387, "div", 10)(388, "label", 41);
      \u0275\u0275text(389, "Ratings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "div", 21)(391, "a", 42);
      \u0275\u0275text(392, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "div", 43)(394, "ul", 10)(395, "li")(396, "label", 44);
      \u0275\u0275element(397, "input", 45)(398, "i", 46)(399, "i", 46)(400, "i", 46)(401, "i", 46)(402, "i", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(403, "li")(404, "label", 44);
      \u0275\u0275element(405, "input", 45)(406, "i", 46)(407, "i", 46)(408, "i", 46)(409, "i", 46)(410, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(411, "li")(412, "label", 44);
      \u0275\u0275element(413, "input", 45)(414, "i", 46)(415, "i", 46)(416, "i", 46)(417, "i", 49)(418, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "li")(420, "label", 44);
      \u0275\u0275element(421, "input", 45)(422, "i", 46)(423, "i", 46)(424, "i", 49)(425, "i", 49)(426, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(427, "li")(428, "label", 44);
      \u0275\u0275element(429, "input", 45)(430, "i", 46)(431, "i", 49)(432, "i", 49)(433, "i", 49)(434, "i", 48);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(435, "div", 50)(436, "div", 51)(437, "a", 52);
      \u0275\u0275text(438, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(439, "div", 51)(440, "a", 53);
      \u0275\u0275text(441, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(442, "div", 10)(443, "label", 41);
      \u0275\u0275text(444, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "div", 111);
      \u0275\u0275element(446, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(447, "div", 58)(448, "label", 41);
      \u0275\u0275text(449, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "div", 21)(451, "a", 42);
      \u0275\u0275text(452, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "div", 43)(454, "ul")(455, "li")(456, "label", 44);
      \u0275\u0275element(457, "input", 45)(458, "i", 59);
      \u0275\u0275text(459, "Active ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(460, "li")(461, "label", 44);
      \u0275\u0275element(462, "input", 45)(463, "i", 60);
      \u0275\u0275text(464, "Inactive ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(465, "div", 61)(466, "div", 50)(467, "div", 51)(468, "a", 112);
      \u0275\u0275text(469, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(470, "div", 51)(471, "button", 63);
      \u0275\u0275text(472, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(473, "div", 64)(474, "div", 65)(475, "div", 66)(476, "div", 67)(477, "h4", 68);
      \u0275\u0275text(478, "Add New Testimonial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "button", 69);
      \u0275\u0275element(480, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(481, "form")(482, "div", 70)(483, "div", 10)(484, "span", 71);
      \u0275\u0275text(485, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "div", 72)(487, "div", 73);
      \u0275\u0275element(488, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "div", 75)(490, "div", 76);
      \u0275\u0275element(491, "i", 77);
      \u0275\u0275text(492, "Upload Image ");
      \u0275\u0275element(493, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(494, "span", 79);
      \u0275\u0275text(495, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(496, "div", 80)(497, "div", 81)(498, "div", 10)(499, "label", 41);
      \u0275\u0275text(500, "Customer");
      \u0275\u0275elementStart(501, "span", 82);
      \u0275\u0275text(502, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(503, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "div", 81)(505, "div", 10)(506, "label", 41);
      \u0275\u0275text(507, "Date");
      \u0275\u0275elementStart(508, "span", 82);
      \u0275\u0275text(509, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(510, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(511, "div", 81)(512, "div", 10)(513, "label", 41);
      \u0275\u0275text(514, "Rating");
      \u0275\u0275elementStart(515, "span", 82);
      \u0275\u0275text(516, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(517, "mat-select", 84)(518, "mat-option", 85);
      \u0275\u0275text(519, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(520, "mat-option", 85);
      \u0275\u0275text(521, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "mat-option", 85);
      \u0275\u0275text(523, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "mat-option", 85);
      \u0275\u0275text(525, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "mat-option", 85);
      \u0275\u0275text(527, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(528, "mat-option", 85);
      \u0275\u0275text(529, "1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(530, "div", 81)(531, "div", 10)(532, "label", 41);
      \u0275\u0275text(533, "Status ");
      \u0275\u0275elementStart(534, "span", 82);
      \u0275\u0275text(535, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(536, "mat-select", 84)(537, "mat-option", 85);
      \u0275\u0275text(538, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "mat-option", 85);
      \u0275\u0275text(540, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "mat-option", 85);
      \u0275\u0275text(542, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(543, "div", 86)(544, "div", 58)(545, "label", 41);
      \u0275\u0275text(546, "Content");
      \u0275\u0275elementStart(547, "span", 82);
      \u0275\u0275text(548, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(549, "input", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(550, "div", 87)(551, "button", 88);
      \u0275\u0275text(552, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "button", 113);
      \u0275\u0275text(554, "Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(555, "div", 90)(556, "div", 65)(557, "div", 66)(558, "div", 67)(559, "h4", 68);
      \u0275\u0275text(560, "Edit Testimonial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(561, "button", 69);
      \u0275\u0275element(562, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(563, "form")(564, "div", 70)(565, "div", 10)(566, "span", 71);
      \u0275\u0275text(567, "Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "div", 72)(569, "div", 73)(570, "div", 91);
      \u0275\u0275element(571, "img", 114);
      \u0275\u0275elementStart(572, "a", 93);
      \u0275\u0275element(573, "i", 94);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(574, "div", 75)(575, "div", 76);
      \u0275\u0275element(576, "i", 77);
      \u0275\u0275text(577, "Upload Image ");
      \u0275\u0275element(578, "input", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(579, "span", 79);
      \u0275\u0275text(580, "JPG or PNG format, not exceeding 5MB.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(581, "div", 80)(582, "div", 81)(583, "div", 10)(584, "label", 41);
      \u0275\u0275text(585, "Customer");
      \u0275\u0275elementStart(586, "span", 82);
      \u0275\u0275text(587, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(588, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(589, "div", 81)(590, "div", 10)(591, "label", 41);
      \u0275\u0275text(592, "Date");
      \u0275\u0275elementStart(593, "span", 82);
      \u0275\u0275text(594, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(595, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(596, "div", 81)(597, "div", 10)(598, "label", 41);
      \u0275\u0275text(599, "Rating");
      \u0275\u0275elementStart(600, "span", 82);
      \u0275\u0275text(601, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(602, "mat-select", 84)(603, "mat-option", 85);
      \u0275\u0275text(604, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(605, "mat-option", 85);
      \u0275\u0275text(606, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(607, "mat-option", 85);
      \u0275\u0275text(608, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(609, "mat-option", 85);
      \u0275\u0275text(610, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "mat-option", 85);
      \u0275\u0275text(612, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(613, "mat-option", 85);
      \u0275\u0275text(614, "1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(615, "div", 81)(616, "div", 10)(617, "label", 41);
      \u0275\u0275text(618, "Status ");
      \u0275\u0275elementStart(619, "span", 82);
      \u0275\u0275text(620, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(621, "mat-select", 84)(622, "mat-option", 85);
      \u0275\u0275text(623, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "mat-option", 85);
      \u0275\u0275text(625, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(626, "mat-option", 85);
      \u0275\u0275text(627, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(628, "div", 86)(629, "div", 58)(630, "label", 41);
      \u0275\u0275text(631, "Content");
      \u0275\u0275elementStart(632, "span", 82);
      \u0275\u0275text(633, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(634, "input", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(635, "div", 87)(636, "button", 88);
      \u0275\u0275text(637, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "button", 113);
      \u0275\u0275text(639, "Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(640, "div", 95)(641, "div", 96)(642, "div", 66)(643, "div", 97)(644, "div", 10);
      \u0275\u0275element(645, "img", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(646, "h6", 116);
      \u0275\u0275text(647, "Delete Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(648, "p", 10);
      \u0275\u0275text(649, "Are you sure, you want to delete Inventory?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(650, "div", 117)(651, "a", 118);
      \u0275\u0275text(652, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(653, "a", 119);
      \u0275\u0275text(654, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 69 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, MatSelectModule, MatSelect, MatOption, DateRangePickerComponent, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestimonialsComponent, [{
    type: Component,
    args: [{ selector: "app-testimonials", imports: [
      CommonModule,
      CustomPaginationComponent,
      MatSortModule,
      MatSelectModule,
      DateRangePickerComponent,
      RouterLink,
      FormsModule
    ], template: `<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Testimonials</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown me-1">
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
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                    <i class="isax isax-add-circle5 me-1"></i>New Testimonials
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->

    <!-- Table Search Start -->
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
    <!-- Table Search End -->

    <!-- Table List Start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th class="no-sort">Customer</th>
                    <th class="no-sort">Rating</th>
                    <th class="no-sort">Content</th>
                    <th mat-sort-header="date">Created On</th>
                    <th mat-sort-header="status">Status</th>
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
                        <div class="d-flex align-items-center">
                            <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">{{data.customer}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>
                        @if(data.rating==='1'){
                            <i class="isax isax-star-15 "></i>
                            <i class="isax isax-star-15 text-warning"></i>
                            <i class="isax isax-star-15 text-warning"></i>
                            <i class="isax isax-star-15 text-warning"></i>
                            <i class="isax isax-star-15 text-warning"></i>
                        }
                        @else if(data.rating==='2'){
                        <i class="isax isax-star-15"></i>
                        <i class="isax isax-star-15"></i>
                        <i class="isax isax-star-15 text-warning"></i>
                        <i class="isax isax-star-15 text-warning"></i>
                        <i class="isax isax-star-15 text-warning"></i>
                        }
                        @else{
                        <i class="isax isax-star-15 text-warning"></i>
                        <i class="isax isax-star-15 text-warning"></i>
                        <i class="isax isax-star-15 text-warning"></i>
                        <i class="isax isax-star-15 text-warning"></i>
                        <i class="isax isax-star-15 text-warning"></i>
                        }
                    </td>	
                    <td>{{data.content}}</td>
                    <td>{{data.createdOn}}</td>
                    
                    <td>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="badge badge-sm d-inline-flex align-items-center me-1" 
                            [ngClass]="data.status==='active'?' badge-soft-success ':' badge-soft-danger'">
                                <i class="isax isax-document-sketch5 me-1"></i>
                                active
                            </a>
                            </div>
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
    <!-- /Table List -->
    <app-custom-pagination *ngIf="row"/>
</div>

    <!-- Start Filter -->
    <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">                                      
        <div class="offcanvas-header d-block pb-0">
            <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
                <h6 class="offcanvas-title">Filter</h6>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <div class="mb-3">
                <label class="form-label">Ratings</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                        <ul class="mb-3">
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning"></i>
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15"></i>
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 me-1"></i>
                                    <i class="isax isax-star-15"></i>
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 me-1"></i>
                                    <i class="isax isax-star-15 me-1"></i>
                                    <i class="isax isax-star-15"></i>
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="isax isax-star-15 text-warning me-1"></i>
                                    <i class="isax isax-star-15 me-1"></i>
                                    <i class="isax isax-star-15 me-1"></i>
                                    <i class="isax isax-star-15 me-1"></i>
                                    <i class="isax isax-star-15"></i>
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
                <label class="form-label">Date Range</label>
                <div class="input-group position-relative">
                    <input type="text" class="form-control date-range bookingrange rounded-end">
                    <span class="input-icon-addon fs-16 text-gray-9">
                        <i class="isax isax-calendar-2"></i>
                    </span>
                </div>
            </div>	
            <div class="mb-0">
                <label class="form-label">Status</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info">	
                        <ul>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Active
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Inactive
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>			
            <div class="offcanvas-footer">
                <div class="row g-2">
                    <div class="col-6">
                        <a href="javascript:void(0);"  class="btn btn-outline-white w-100">Reset</a>
                    </div>
                    <div class="col-6">
                        <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- End Filter -->

<!-- Start Add Modal  -->
<div id="add_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New Testimonial</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="mb-3">
                        <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                                <i class="isax isax-image text-primary fs-24"></i>
                            </div>
                            <div class="d-inline-flex flex-column align-items-start">
                                <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                                    <i class="isax isax-image me-1"></i>Upload Image
                                    <input type="file" class="form-control image-sign" multiple="">
                                </div>
                                <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Customer<span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Date<span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Rating<span class="text-danger">*</span></label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
                            <mat-option value="1">Select</mat-option>
                            <mat-option value="1">5</mat-option>
                            <mat-option value="1">4</mat-option>
                            <mat-option value="1">3</mat-option>
                            <mat-option value="1">2</mat-option>
                            <mat-option value="1">1</mat-option>
                        </mat-select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Status <span class="text-danger">*</span></label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
                            <mat-option value="1">Select</mat-option>
                            <mat-option value="1">Active</mat-option>
                            <mat-option value="1">Inactive</mat-option>
                        </mat-select>										
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-0">
                                <label class="form-label">Content<span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Changes</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- End Add Modal  -->
<!-- End Edit Modal  -->
<div id="edit_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit  Testimonial</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div>
            <form>
                <div class="modal-body">
                    <div class="mb-3">
                        <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                                <div class="position-relative d-flex align-items-center">
                                    <img src="assets/img/products/product-05.jpg" class="avatar avatar-xl" alt="User Img">
                                    <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>
                                </div>
                            </div>
                            <div class="d-inline-flex flex-column align-items-start">
                                <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                                    <i class="isax isax-image me-1"></i>Upload Image
                                    <input type="file" class="form-control image-sign" multiple="">
                                </div>
                                <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>
                            </div>
                        </div>
                    </div>
                                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Customer<span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Date<span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Rating<span class="text-danger">*</span></label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
                            <mat-option value="1">Select</mat-option>
                            <mat-option value="1">5</mat-option>
                            <mat-option value="1">4</mat-option>
                            <mat-option value="1">3</mat-option>
                            <mat-option value="1">2</mat-option>
                            <mat-option value="1">1</mat-option>
                        </mat-select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Status <span class="text-danger">*</span></label>
                        <mat-select class="custom-mat-select select" placeholder="Select">
                            <mat-option value="1">Select</mat-option>
                            <mat-option value="1">Active</mat-option>
                            <mat-option value="1">Inactive</mat-option>
                        </mat-select>										
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-0">
                                <label class="form-label">Content<span class="text-danger">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Changes</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- End Edit Modal  -->
<!-- Start Delete Modal  -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <label class="form-label">Customer</label>
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
                                        <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-29.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
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
                    <label class="form-label">Ratings</label>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                            Select
                        </a>
                        <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                            <ul class="mb-3">
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning"></i>
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15"></i>
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 me-1"></i>
                                        <i class="isax isax-star-15"></i>
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 me-1"></i>
                                        <i class="isax isax-star-15 me-1"></i>
                                        <i class="isax isax-star-15"></i>
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <i class="isax isax-star-15 text-warning me-1"></i>
                                        <i class="isax isax-star-15 me-1"></i>
                                        <i class="isax isax-star-15 me-1"></i>
                                        <i class="isax isax-star-15 me-1"></i>
                                        <i class="isax isax-star-15"></i>
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
                    <label class="form-label">Date Range</label>
                    <div class="filter-daterange">
                        <app-date-range-picker></app-date-range-picker>
                    </div>
                </div>	
                <div class="mb-0">
                    <label class="form-label">Status</label>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                            Select
                        </a>
                        <div class="dropdown-menu shadow-lg w-100 dropdown-info">	
                            <ul>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Active
                                    </label>
                                </li>
                                <li>
                                    <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                        <input class="form-check-input m-0 me-2" type="checkbox">
                                        <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Inactive
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>			
                <div class="offcanvas-footer">
                    <div class="row g-2">
                        <div class="col-6">
                            <a href="javascript:void(0);"  class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
                        </div>
                        <div class="col-6">
                            <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Filter -->

    <!-- Start Add Modal  -->
    <div id="add_modal" class="modal fade">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add New Testimonial</h4>
                    <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="mb-3">
                            <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>
                            <div class="d-flex align-items-center">
                                <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                                    <i class="isax isax-image text-primary fs-24"></i>
                                </div>
                                <div class="d-inline-flex flex-column align-items-start">
                                    <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                                        <i class="isax isax-image me-1"></i>Upload Image
                                        <input type="file" class="form-control image-sign" multiple="">
                                    </div>
                                    <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Customer<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Date<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Rating<span class="text-danger">*</span></label>
                            <mat-select class="custom-mat-select select" placeholder="Select">
                                <mat-option value="1">Select</mat-option>
                                <mat-option value="1">5</mat-option>
                                <mat-option value="1">4</mat-option>
                                <mat-option value="1">3</mat-option>
                                <mat-option value="1">2</mat-option>
                                <mat-option value="1">1</mat-option>
                            </mat-select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Status <span class="text-danger">*</span></label>
                            <mat-select class="custom-mat-select select" placeholder="Select">
                                <mat-option value="1">Select</mat-option>
                                <mat-option value="1">Active</mat-option>
                                <mat-option value="1">Inactive</mat-option>
                            </mat-select>										
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-0">
                                    <label class="form-label">Content<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- End Add Modal  -->

    <!-- End Edit Modal  -->
    <div id="edit_modal" class="modal fade">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit  Testimonial</h4>
                    <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="mb-3">
                            <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>
                            <div class="d-flex align-items-center">
                                <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                                    <div class="position-relative d-flex align-items-center">
                                        <img src="assets/img/products/product-05.jpg" class="avatar avatar-xl" alt="">
                                        <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>
                                    </div>
                                </div>
                                <div class="d-inline-flex flex-column align-items-start">
                                    <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                                        <i class="isax isax-image me-1"></i>Upload Image
                                        <input type="file" class="form-control image-sign" multiple="">
                                    </div>
                                    <span class="text-gray-9">JPG or PNG format, not exceeding 5MB.</span>
                                </div>
                            </div>
                        </div>
                                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Customer<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Date<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Rating<span class="text-danger">*</span></label>
                            <mat-select class="custom-mat-select select" placeholder="Select">
                                <mat-option value="1">Select</mat-option>
                                <mat-option value="1">5</mat-option>
                                <mat-option value="1">4</mat-option>
                                <mat-option value="1">3</mat-option>
                                <mat-option value="1">2</mat-option>
                                <mat-option value="1">1</mat-option>
                            </mat-select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Status <span class="text-danger">*</span></label>
                            <mat-select class="custom-mat-select select" placeholder="Select">
                                <mat-option value="1">Select</mat-option>
                                <mat-option value="1">Active</mat-option>
                                <mat-option value="1">Inactive</mat-option>
                            </mat-select>										
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-0">
                                    <label class="form-label">Content<span class="text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                        <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- End Edit Modal  -->

    <!-- Start Delete Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center">
                    <div class="mb-3">
                        <img src="assets/img/icons/delete.svg" alt="img">
                    </div>
                    <h6 class="mb-1">Delete Inventory</h6>
                    <p class="mb-3">Are you sure,  you want to delete Inventory?</p>
                    <div class="d-flex justify-content-center">
                        <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal  -->

</div>
<!-- End Content -->

` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialsComponent, { className: "TestimonialsComponent", filePath: "src/app/features/content/testimonials/testimonials.component.ts", lineNumber: 22 });
})();
export {
  TestimonialsComponent
};
//# sourceMappingURL=chunk-KYA7UNCA.js.map
