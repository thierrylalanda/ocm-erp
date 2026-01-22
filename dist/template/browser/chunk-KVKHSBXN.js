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
  ɵɵlistener,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/content/faq/faq.component.ts
var _c0 = () => ({ standalone: true });
function FaqComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 75)(2, "div", 76)(3, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_For_64_Template_input_ngModelChange_3_listener($event) {
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
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 78)(11, "a", 79);
    \u0275\u0275element(12, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 6)(14, "li")(15, "a", 81);
    \u0275\u0275element(16, "i", 82);
    \u0275\u0275text(17, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 83);
    \u0275\u0275element(20, "i", 84);
    \u0275\u0275text(21, "Delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", data_r2.isSelected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.Description);
  }
}
function FaqComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 85);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function FaqComponent_app_custom_pagination_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var FaqComponent = class _FaqComponent {
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
    this.data.getFaq().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.faq) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getFaq().subscribe((apiRes) => {
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
  static \u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FaqComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], decls: 192, vars: 6, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], [1, "dropdown", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-export-1", "me-1"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0);", "data-bs-toggle", "offcanvas", "data-bs-target", "#customcanvas", 1, "btn", "btn-outline-white", "fw-normal", "d-inline-flex", "align-items-center"], [1, "isax", "isax-filter", "me-1"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], [1, "no-sort"], [1, "form-check", "form-check-md", 3, "click"], ["type", "checkbox", "id", "select-all", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["tabindex", "-1", "id", "customcanvas", 1, "offcanvas", "offcanvas-offset", "offcanvas-end"], [1, "offcanvas-header", "d-block", "pb-0"], [1, "border-bottom", "d-flex", "align-items-center", "justify-content-between", "pb-3"], [1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "fa-solid", "fa-x"], [1, "offcanvas-body", "pt-3"], ["action", "#"], [1, "form-label"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "offcanvas-footer"], [1, "row", "g-2"], [1, "col-6"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-white", "w-100"], ["data-bs-dismiss", "offcanvas", "id", "filter-submit", 1, "btn", "btn-primary", "w-100"], ["id", "add_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn-close-modal", "custom-btn-close"], [1, "modal-body"], [1, "col-md-12"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "mb-0"], [1, "form-control"], [1, "modal-footer", "d-flex", "align-items-center", "justify-content-between", "gap-1"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "edit_modal", 1, "modal", "fade"], ["type", "text", "value", "How does invoicing software benefit businesses?", 1, "form-control"], ["type", "text", "value", "Benefits", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", 1, "btn", "btn-primary"], [1, "sorting_1"], [1, "form-check", "form-check-md"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "isax", "isax-more"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Faq");
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
      \u0275\u0275text(20, "New Faq ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "a", 15);
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17)(29, "label")(30, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function FaqComponent_Template_input_ngModelChange_30_listener() {
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
      \u0275\u0275listener("matSortChange", function FaqComponent_Template_table_matSortChange_49_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(50, "thead", 28)(51, "tr")(52, "th", 29)(53, "div", 30);
      \u0275\u0275listener("click", function FaqComponent_Template_div_click_53_listener() {
        return ctx.selectAll(ctx.initChecked);
      });
      \u0275\u0275elementStart(54, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function FaqComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initChecked, $event) || (ctx.initChecked = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "th", 29);
      \u0275\u0275text(56, "Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 29);
      \u0275\u0275text(58, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 29);
      \u0275\u0275text(60, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "th", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "tbody");
      \u0275\u0275repeaterCreate(63, FaqComponent_For_64_Template, 22, 4, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(65, FaqComponent_Conditional_65_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(66, FaqComponent_app_custom_pagination_66_Template, 1, 0, "app-custom-pagination", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 33)(68, "div", 34)(69, "div", 35)(70, "h6", 36);
      \u0275\u0275text(71, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 37);
      \u0275\u0275element(73, "i", 38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 39)(75, "form", 40)(76, "div", 10)(77, "label", 41);
      \u0275\u0275text(78, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "mat-select", 42)(80, "mat-option", 43);
      \u0275\u0275text(81, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "mat-option", 43);
      \u0275\u0275text(83, "General");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "mat-option", 43);
      \u0275\u0275text(85, "Benefits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "mat-option", 43);
      \u0275\u0275text(87, "Usage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "mat-option", 43);
      \u0275\u0275text(89, "Tax & Compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "mat-option", 43);
      \u0275\u0275text(91, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "mat-option", 43);
      \u0275\u0275text(93, "Integrations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "mat-option", 43);
      \u0275\u0275text(95, "Security");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 44)(97, "div", 45)(98, "div", 46)(99, "a", 47);
      \u0275\u0275text(100, "Reset");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 46)(102, "button", 48);
      \u0275\u0275text(103, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(104, "div", 49)(105, "div", 50)(106, "div", 51)(107, "div", 52)(108, "h4", 53);
      \u0275\u0275text(109, "Add New Faq");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "button", 54);
      \u0275\u0275element(111, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "form")(113, "div", 55)(114, "div", 56)(115, "div", 10)(116, "label", 41);
      \u0275\u0275text(117, "Ttle ");
      \u0275\u0275elementStart(118, "span", 57);
      \u0275\u0275text(119, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(120, "input", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 56)(122, "div", 10)(123, "label", 41);
      \u0275\u0275text(124, "Category");
      \u0275\u0275elementStart(125, "span", 57);
      \u0275\u0275text(126, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(127, "input", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 56)(129, "div", 59)(130, "label", 41);
      \u0275\u0275text(131, "Description");
      \u0275\u0275elementStart(132, "span", 57);
      \u0275\u0275text(133, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(134, "textarea", 60);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "div", 61)(136, "button", 62);
      \u0275\u0275text(137, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "button", 63);
      \u0275\u0275text(139, "Save");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(140, "div", 64)(141, "div", 50)(142, "div", 51)(143, "div", 52)(144, "h4", 53);
      \u0275\u0275text(145, "Edit FAQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "button", 54);
      \u0275\u0275element(147, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "form")(149, "div", 55)(150, "div", 56)(151, "div", 10)(152, "label", 41);
      \u0275\u0275text(153, "Ttle ");
      \u0275\u0275elementStart(154, "span", 57);
      \u0275\u0275text(155, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(156, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 56)(158, "div", 10)(159, "label", 41);
      \u0275\u0275text(160, "Category");
      \u0275\u0275elementStart(161, "span", 57);
      \u0275\u0275text(162, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(163, "input", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 56)(165, "div", 59)(166, "label", 41);
      \u0275\u0275text(167, "Description");
      \u0275\u0275elementStart(168, "span", 57);
      \u0275\u0275text(169, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "textarea", 60);
      \u0275\u0275text(171, "It automates billing, reduces errors, and speeds up the payment process.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(172, "div", 61)(173, "button", 62);
      \u0275\u0275text(174, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "button", 63);
      \u0275\u0275text(176, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(177, "div", 67)(178, "div", 68)(179, "div", 51)(180, "div", 69)(181, "div", 10);
      \u0275\u0275element(182, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "h6", 71);
      \u0275\u0275text(184, "Delete Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "p", 10);
      \u0275\u0275text(186, "Are you sure, you want to delete Inventory?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 72)(188, "a", 73);
      \u0275\u0275text(189, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "a", 74);
      \u0275\u0275text(191, "Yes, Delete");
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
  }, dependencies: [CommonModule, NgIf, NgxEditorModule, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, MatSortModule, MatSort, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaqComponent, [{
    type: Component,
    args: [{ selector: "app-faq", imports: [
      CommonModule,
      NgxEditorModule,
      MatSelectModule,
      CustomPaginationComponent,
      MatSortModule,
      FormsModule
    ], template: '            <!-- Start Content -->\n            <div class="content-two">\n\n                <!-- Page Header -->\n                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n                    <div>\n                        <h6>Faq</h6>\n                    </div>\n                    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n                        <div class="dropdown me-1">\n                            <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                <i class="isax isax-export-1 me-1"></i>Export\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                                </li>\n                                <li>\n                                    <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div>\n                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">\n                                <i class="isax isax-add-circle5 me-1"></i>New Faq\n\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Page Header -->\n\n                <!-- Start Table Search -->\n                <div class="mb-3">\n                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="table-search d-flex align-items-center mb-0">\n                                <div class="search-input">\n                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                                      <label> \n                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                                    </label>\n                                  </div>\n                                 </div>\n                            </div>\n                            <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">\n                                <i class="isax isax-filter me-1"></i>Filter\n                            </a>\n                        </div>\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="dropdown">\n                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                    <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                                </a>\n                                <ul class="dropdown-menu  dropdown-menu-end">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <!-- End Table Search -->\n\n                <!-- Start Table List -->\n                <div class="table-responsive">\n                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n                        <thead class="thead-light">\n                            <tr>\n                                <th class="no-sort">\n                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                                    </div>\n                                </th>\n                                <th class="no-sort">Title</th>\n                                <th class="no-sort">Category</th>\n                                <th class="no-sort">Description</th>\n                                <th class="no-sort"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            @for (data of tableData;track data){\n                            <tr>\n                                <td class="sorting_1">\n                                    <div class="form-check form-check-md" >\n                                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                                    </div>\n                                </td>\n                                <td>{{data.Title}}</td>\n                                <td>{{data.Category}}</td>\n                                <td>{{data.Description}}</td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        } @if(tableData.length === 0){\n                            <tr>\n                              <td colspan="12" class="text-center text-dark">No matching records found</td>\n                            </tr>\n                          }\n\n                        </tbody>\n                    </table>\n                </div>\n                <!-- End Table List -->\n\n                <app-custom-pagination *ngIf="row"/>\n            </div>\n            <!-- End Content -->\n\n\n                    <!-- Start Filter -->\n        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">\n            <div class="offcanvas-header d-block pb-0">\n                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">\n                    <h6 class="offcanvas-title">Filter</h6>\n                    <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                </div>\n            </div>\n            <div class="offcanvas-body pt-3">\n                <form action="#">\n\n                    <div class="mb-3">\n                        <label class="form-label">Category</label>\n                        <mat-select class="custom-mat-select select" placeholder="Select">\n                            <mat-option value="1">Select</mat-option>\n                            <mat-option value="1">General</mat-option>\n                            <mat-option value="1">Benefits</mat-option>\n                            <mat-option value="1">Usage</mat-option>\n                            <mat-option value="1">Tax & Compliance</mat-option>\n                            <mat-option value="1">Features</mat-option>\n                            <mat-option value="1">Integrations</mat-option>\n                            <mat-option value="1">Security</mat-option>\n                        </mat-select>\n                    </div>\n\n                    <div class="offcanvas-footer">\n                        <div class="row g-2">\n                            <div class="col-6">\n                                <a href="javascript:void(0);" class="btn btn-outline-white w-100">Reset</a>\n                            </div>\n                            <div class="col-6">\n                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <!-- End Filter -->\n\n        <!-- Start Add Modal  -->\n        <div id="add_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Add New Faq</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Ttle <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Category<span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-0">\n                                    <label class="form-label">Description<span class="text-danger">*</span></label>\n                                    <textarea class="form-control"></textarea>\n                                </div>\n                            </div>\n\n\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary">Save</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Add Modal  -->\n\n        <!-- Start Edit Modal  -->\n        <div id="edit_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit FAQ</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Ttle <span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control" value="How does invoicing software benefit businesses?">\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Category<span class="text-danger">*</span></label>\n                                    <input type="text" class="form-control" value="Benefits">\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-0">\n                                    <label class="form-label">Description<span class="text-danger">*</span></label>\n                                    <textarea class="form-control">It automates billing, reduces errors, and speeds up the payment process.</textarea>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Edit Modal  -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Inventory</h6>\n                        <p class="mb-3">Are you sure, you want to delete Inventory?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Delete Modal  -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src/app/features/content/faq/faq.component.ts", lineNumber: 21 });
})();
export {
  FaqComponent
};
//# sourceMappingURL=chunk-KVKHSBXN.js.map
