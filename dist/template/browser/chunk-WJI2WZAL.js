import {
  DateRangePickerComponent
} from "./chunk-2I7DAYVQ.js";
import {
  MatSliderModule
} from "./chunk-Z5WPXIQX.js";
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
import "./chunk-OMNMTJX2.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-OSDWQYYA.js";
import "./chunk-4CMXULEF.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
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

// src/app/features/manage/contact-messages/contact-messages.component.ts
var _c0 = () => ({ standalone: true });
function ContactMessagesComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 93)(2, "div", 94)(3, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ContactMessagesComponent_For_64_Template_input_ngModelChange_3_listener($event) {
      const data_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(data_r2.isSelected, $event) || (data_r2.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td")(5, "div", 96)(6, "a", 97);
    \u0275\u0275element(7, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6", 99)(10, "a", 100);
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
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 101)(21, "a", 102);
    \u0275\u0275element(22, "i", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ul", 6)(24, "li")(25, "a", 104);
    \u0275\u0275element(26, "i", 105);
    \u0275\u0275text(27, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "li")(29, "a", 106);
    \u0275\u0275element(30, "i", 107);
    \u0275\u0275text(31, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/", data_r2.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.createdOn);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r2.routes.contactMessages);
  }
}
function ContactMessagesComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 108);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function ContactMessagesComponent_app_custom_pagination_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var ContactMessagesComponent = class _ContactMessagesComponent {
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
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  row = true;
  constructor(data, router, pagination) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.data.getContactMessage().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.contactMessages) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getContactMessage().subscribe((apiRes) => {
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
  static \u0275fac = function ContactMessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactMessagesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactMessagesComponent, selectors: [["app-contact-messages"]], decls: 216, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "fw-medium"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "data-bs-auto-close", "outside", "aria-expanded", "true", 1, "dropdown-toggle", "btn", "btn-lg", "bg-light", "d-flex", "align-items-center", "justify-content-start", "fs-13", "fw-normal", "border"], [1, "dropdown-menu", "shadow-lg", "w-100", "dropdown-info"], [1, "input-icon-start", "position-relative"], [1, "input-icon-addon", "fs-12"], [1, "isax", "isax-search-normal"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-sm"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-inline-flex", "align-items-center", "text-gray-9"], ["type", "checkbox", 1, "form-check-input", "select-all", "m-0", "me-2"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline"], [1, "dropdown-item", "px-2", "d-flex", "align-items-center", "text-dark"], ["type", "checkbox", 1, "form-check-input", "m-0", "me-2"], [1, "avatar", "avatar-sm", "rounded-circle", "me-2"], ["src", "assets/img/profiles/avatar-28.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-29.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-12.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-27.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-30.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], ["src", "assets/img/profiles/avatar-16.jpg", "alt", "img", 1, "flex-shrink-0", "rounded-circle"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", "id", "close-filter", 1, "btn", "btn-outline-white", "w-100"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "w-100"], [1, "filter-daterange"], [1, "offcanvas-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "edit_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg", "edit-contact-modal"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "text-danger"], ["type", "text", "placeholder", "John Carter", 1, "form-control"], ["type", "text", "placeholder", "john@example.com", 1, "form-control"], [1, "form-label", "d-block"], ["type", "text", "id", "phone", 1, "form-control"], [1, "col-md-12"], ["placeholder", "How do I integrate payment gateways for faster transactions?", 1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0"], ["alt", "img", 1, "rounded-circle", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis"], ["data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function ContactMessagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Contact Messages");
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
      \u0275\u0275twoWayListener("ngModelChange", function ContactMessagesComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ContactMessagesComponent_Template_input_ngModelChange_26_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "a", 17);
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275text(29, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 10)(31, "div", 3)(32, "a", 19);
      \u0275\u0275element(33, "i", 20);
      \u0275\u0275text(34, "Sort By : ");
      \u0275\u0275elementStart(35, "span", 21);
      \u0275\u0275text(36, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "ul", 22)(38, "li")(39, "a", 7);
      \u0275\u0275text(40, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 7);
      \u0275\u0275text(43, "Oldest");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(44, "div", 23)(45, "table", 24);
      \u0275\u0275listener("matSortChange", function ContactMessagesComponent_Template_table_matSortChange_45_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(46, "thead", 25)(47, "tr")(48, "th", 26)(49, "div", 27);
      \u0275\u0275listener("click", function ContactMessagesComponent_Template_div_click_49_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(50, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function ContactMessagesComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "th", 26);
      \u0275\u0275text(52, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 26);
      \u0275\u0275text(54, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 26);
      \u0275\u0275text(56, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 26);
      \u0275\u0275text(58, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 26);
      \u0275\u0275text(60, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "th", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "tbody");
      \u0275\u0275repeaterCreate(63, ContactMessagesComponent_For_64_Template, 32, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(65, ContactMessagesComponent_Conditional_65_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(66, ContactMessagesComponent_app_custom_pagination_66_Template, 1, 0, "app-custom-pagination", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 30)(68, "div", 31)(69, "div", 32)(70, "h6", 33);
      \u0275\u0275text(71, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 34);
      \u0275\u0275element(73, "i", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 36)(75, "form", 37)(76, "div", 8)(77, "label", 38);
      \u0275\u0275text(78, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 3)(80, "a", 39);
      \u0275\u0275text(81, " Select ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 40)(83, "div", 8)(84, "div", 41)(85, "span", 42);
      \u0275\u0275element(86, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275element(87, "input", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "ul", 8)(89, "li", 45)(90, "label", 46);
      \u0275\u0275element(91, "input", 47);
      \u0275\u0275text(92, " Select All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "a", 48);
      \u0275\u0275text(94, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "li")(96, "label", 49);
      \u0275\u0275element(97, "input", 50);
      \u0275\u0275elementStart(98, "span", 51);
      \u0275\u0275element(99, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275text(100, "Emily Clark ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "li")(102, "label", 49);
      \u0275\u0275element(103, "input", 50);
      \u0275\u0275elementStart(104, "span", 51);
      \u0275\u0275element(105, "img", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275text(106, "John Carter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "li")(108, "label", 49);
      \u0275\u0275element(109, "input", 50);
      \u0275\u0275elementStart(110, "span", 51);
      \u0275\u0275element(111, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275text(112, "Sophia White ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "li")(114, "label", 49);
      \u0275\u0275element(115, "input", 50);
      \u0275\u0275elementStart(116, "span", 51);
      \u0275\u0275element(117, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275text(118, "Michael Johnson ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "li")(120, "label", 49);
      \u0275\u0275element(121, "input", 50);
      \u0275\u0275elementStart(122, "span", 51);
      \u0275\u0275element(123, "img", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275text(124, "Olivia Harris ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "li")(126, "label", 49);
      \u0275\u0275element(127, "input", 50);
      \u0275\u0275elementStart(128, "span", 51);
      \u0275\u0275element(129, "img", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275text(130, "David Anderson ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "div", 58)(132, "div", 59)(133, "a", 60);
      \u0275\u0275text(134, "Cancel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 59)(136, "a", 61);
      \u0275\u0275text(137, "Select");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(138, "div")(139, "label", 38);
      \u0275\u0275text(140, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 62);
      \u0275\u0275element(142, "app-date-range-picker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 63)(144, "div", 58)(145, "div", 59)(146, "a", 64);
      \u0275\u0275text(147, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 59)(149, "button", 65);
      \u0275\u0275text(150, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(151, "div", 66)(152, "div", 67)(153, "div", 68)(154, "div", 69)(155, "h4", 70);
      \u0275\u0275text(156, "Edit Contact Message ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "button", 71);
      \u0275\u0275element(158, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "form")(160, "div", 72)(161, "div", 73)(162, "div", 74)(163, "div", 8)(164, "label", 38);
      \u0275\u0275text(165, "Name");
      \u0275\u0275elementStart(166, "span", 75);
      \u0275\u0275text(167, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(168, "input", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "div", 74)(170, "div", 8)(171, "label", 38);
      \u0275\u0275text(172, "Email");
      \u0275\u0275elementStart(173, "span", 75);
      \u0275\u0275text(174, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(175, "input", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 74)(177, "div", 8)(178, "label", 78);
      \u0275\u0275text(179, "Phone Number ");
      \u0275\u0275elementStart(180, "span", 75);
      \u0275\u0275text(181, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(182, "input", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 74)(184, "div", 8)(185, "label", 38);
      \u0275\u0275text(186, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 62);
      \u0275\u0275element(188, "app-date-range-picker");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(189, "div", 80)(190, "div", 8)(191, "label", 38);
      \u0275\u0275text(192, "Content");
      \u0275\u0275elementStart(193, "span", 75);
      \u0275\u0275text(194, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(195, "textarea", 81);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(196, "div", 82)(197, "button", 83);
      \u0275\u0275text(198, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "button", 84);
      \u0275\u0275text(200, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(201, "div", 85)(202, "div", 86)(203, "div", 68)(204, "div", 87)(205, "div", 8);
      \u0275\u0275element(206, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "h6", 89);
      \u0275\u0275text(208, "Delete Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "p", 8);
      \u0275\u0275text(210, "Are you sure, you want to delete contact message?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "div", 90)(212, "a", 91);
      \u0275\u0275text(213, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "a", 92);
      \u0275\u0275text(215, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.initChecked);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 65 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [MatSliderModule, DateRangePickerComponent, CustomPaginationComponent, CommonModule, NgIf, MatSortModule, MatSort, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactMessagesComponent, [{
    type: Component,
    args: [{ selector: "app-contact-messages", imports: [MatSliderModule, DateRangePickerComponent, CustomPaginationComponent, CommonModule, MatSortModule, FormsModule, RouterLink], template: '<!-- Start Content -->\n<div class="content-two">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Contact Messages</h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <div class="dropdown">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- Table Search Start -->\n    <div class="mb-3">\n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="table-search d-flex align-items-center mb-0">\n                    <div class="search-input">\n                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                          <label> \n                          <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                        </label>\n                      </div>\n                     </div>\n                </div>\n                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                    <i class="isax isax-filter me-1"></i>Filter\n                </a>\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center fw-medium" data-bs-toggle="dropdown">\n                        <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu-end">\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                        </li>\n                    </ul>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <!-- Table Search End -->\n\n    <!-- Table List Start -->\n    <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n            <thead class="thead-light">\n                <tr>\n                    <th class="no-sort">\n                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                        </div>\n                    </th>\n\n                    <th class="no-sort">Name</th>\n                    <th class="no-sort">Email</th>\n                    <th class="no-sort">Phone</th>\n                    <th class="no-sort">Message</th>\n                    <th class="no-sort">Created On</th>\n                    <th class="no-sort"></th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td class="sorting_1">\n                        <div class="form-check form-check-md" >\n                            <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                        </div>\n                    </td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                <img src="assets/img/{{data.img}}" class="rounded-circle" alt="img">\n                            </a>\n                            <div>\n                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.name}}</a></h6>\n                            </div>\n                        </div>\n                    </td>\n                    <td>{{data.email}}</td>\n                    <td>{{data.phone}}</td>\n                    <td>{{data.message}}</td>\n                    <td>{{data.createdOn}}</td>\n                    <td class="action-item">\n                        <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                            <i class="fa-solid fa-ellipsis"></i>\n                        </a>\n                        <ul class="dropdown-menu">\n                            <li>\n                                <a [routerLink]="routes.contactMessages" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                            </li>\n                            <li>\n                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                            </li>\n                        </ul>\n                    </td>\n                </tr>\n            } @if(tableData.length === 0){\n                <tr>\n                  <td colspan="12" class="text-center text-dark">No matching records found</td>\n                </tr>\n              }\n            </tbody>\n        </table>\n    </div>\n    <!-- Table List End -->\n    <app-custom-pagination *ngIf="row"/>\n\n</div>\n<!-- End Content -->\n\n\n\n        <!-- Start Filter -->\n        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n            <div class="offcanvas-header d-block pb-0">\n                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n                    <h6 class="offcanvas-title">Filter</h6>\n                    <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                </div>\n            </div>\n            <div class="offcanvas-body pt-3">\n                <form action="#">\n                    <div class="mb-3">\n                        <label class="form-label">Name</label>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">\n								Select\n							</a>\n                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">\n                                <div class="mb-3">\n                                    <div class="input-icon-start position-relative">\n                                        <span class="input-icon-addon fs-12">\n											<i class="isax isax-search-normal"></i>\n										</span>\n                                        <input type="text" class="form-control form-control-sm" placeholder="Search">\n                                    </div>\n                                </div>\n                                <ul class="mb-3">\n                                    <li class="d-flex align-items-center justify-content-between mb-3">\n                                        <label class="d-inline-flex align-items-center text-gray-9">\n                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All\n                                        </label>\n                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-29.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-27.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Michael Johnson\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Harris\n                                        </label>\n                                    </li>\n                                    <li>\n                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">\n                                            <input class="form-check-input m-0 me-2" type="checkbox">\n                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>David Anderson\n                                        </label>\n                                    </li>\n                                </ul>\n                                <div class="row g-2">\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-outline-white w-100" id="close-filter">Cancel</a>\n                                    </div>\n                                    <div class="col-6">\n                                        <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <label class="form-label">Date Range</label>\n                        <div class="filter-daterange">\n                            <app-date-range-picker></app-date-range-picker>\n                        </div>\n                    </div>\n                    <div class="offcanvas-footer">\n                        <div class="row g-2">\n                            <div class="col-6">\n                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>\n                            </div>\n                            <div class="col-6">\n                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <!-- End Filter -->\n\n        <!-- Start Edit Modal  -->\n        <div id="edit_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered modal-lg edit-contact-modal">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit Contact Message </h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="row">\n                                <div class="col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Name<span class="text-danger">*</span></label>\n                                        <input type="text" class="form-control" placeholder="John Carter">\n                                    </div>\n                                </div>\n                                <div class="col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Email<span class="text-danger">*</span></label>\n                                        <input type="text" class="form-control" placeholder="john@example.com">\n                                    </div>\n                                </div>\n                                <div class="col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label d-block">Phone Number <span class="text-danger">*</span></label>\n                                        <input type="text" class="form-control" id="phone">\n                                    </div>\n                                </div>\n                                <div class="col-md-6">\n                                    <div class="mb-3">\n                                        <label class="form-label">Date</label>\n                                        <div class="filter-daterange">\n                                            <app-date-range-picker></app-date-range-picker>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Content<span class="text-danger">*</span></label>\n                                    <textarea class="form-control" placeholder="How do I integrate payment gateways for faster transactions?"></textarea>\n                                </div>\n                            </div>\n\n\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Edit Modal -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Messages</h6>\n                        <p class="mb-3">Are you sure, you want to delete contact message?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Delete Modal  -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactMessagesComponent, { className: "ContactMessagesComponent", filePath: "src/app/features/manage/contact-messages/contact-messages.component.ts", lineNumber: 20 });
})();
export {
  ContactMessagesComponent
};
//# sourceMappingURL=chunk-WJI2WZAL.js.map
