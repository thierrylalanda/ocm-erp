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
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-MR3VQUUR.js";
import "./chunk-F375ST7H.js";
import {
  CheckboxControlValueAccessor,
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
  NgClass
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/super-admin/domain-request/domain-request.component.ts
var _c0 = (a0) => ({ "open-filter": a0 });
var _c1 = () => ({ adaptivePosition: true });
var _c2 = (a0, a1) => ({ "bg-inactive": a0, "badge bg-success-light": a1 });
var _c3 = (a0, a1) => ({ closed: a0, open: a1 });
function DomainRequestComponent_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "h2", 100)(5, "a", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 102);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 103)(23, "div", 104)(24, "a", 105);
    \u0275\u0275element(25, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 107)(27, "ul")(28, "li")(29, "a", 108);
    \u0275\u0275element(30, "i", 109);
    \u0275\u0275text(31, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "li")(33, "a", 110);
    \u0275\u0275element(34, "i", 111);
    \u0275\u0275text(35, "Delete");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.profile);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r1.customer, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.domain);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.noOfEmployees);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.package1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.package2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.createdOn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c2, data_r1.status === "Rejected", data_r1.status === "Approved"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
function DomainRequestComponent_For_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 65)(1, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function DomainRequestComponent_For_122_Template_input_ngModelChange_1_listener($event) {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(user_r4.checked, $event) || (user_r4.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c3, !ctx_r1.isCollapsed1, ctx_r1.isCollapsed1));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", user_r4.checked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r4.name, " ");
  }
}
var DomainRequestComponent = class _DomainRequestComponent {
  data;
  pagination;
  router;
  routes = routes;
  tableData = [];
  // pagination variables
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  showFilter = false;
  dataSource;
  searchDataValue = "";
  // pagination variables end
  constructor(data, pagination, router) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.pagination.tablePageSize.subscribe((res) => {
      if (this.router.url == this.routes.domainRequest) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  getTableData(pageOption) {
    this.data.getDomainRequest().subscribe((apiRes) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray
      });
    });
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
  isCollapsed1 = false;
  isCollapsed2 = false;
  users = [
    { name: "Sumo Soft Limited", checked: false },
    { name: "Repair Group Co", checked: false }
  ];
  users2 = [
    { name: "repairco1993", checked: false },
    { name: "sumosoftltd", checked: false }
  ];
  toggleCollapse1() {
    this.isCollapsed1 = !this.isCollapsed1;
  }
  toggleCollapse2() {
    this.isCollapsed2 = !this.isCollapsed2;
  }
  toggleData = false;
  openContent() {
    this.toggleData = !this.toggleData;
  }
  static \u0275fac = function DomainRequestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomainRequestComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomainRequestComponent, selectors: [["app-domain-request"]], decls: 212, vars: 9, consts: [[1, "page-header"], [1, "content-page-header"], [1, "list-btn"], [1, "filter-list"], ["tabindex", "0", "matTooltip", "Filter", 1, "btn", "btn-filters", "w-auto", "popup-toggle", 3, "click", "keydown.enter"], [1, "me-2"], ["src", "assets/img/icons/filter-icon.svg", "alt", "filter"], ["matTooltip", "Download", 1, "dropdown", "dropdown-action"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn-filters"], [1, "feather", "icon-download"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "d-block"], ["href", "javascript:void(0);", "download", "", 1, "d-flex", "align-items-center", "download-item"], [1, "far", "fa-file-pdf", "me-2"], [1, "far", "fa-file-text", "me-2"], ["href", "javascript:void(0);", "matTooltip", "Print", 1, "btn-filters"], [1, "feather", "icon-printer"], ["id", "filter_inputs", 1, "card", "filter-card"], [1, "card-body", "pb-0"], [1, "row"], [1, "col-sm-6", "col-md-3"], [1, "input-block", "mb-3"], ["for", "name"], ["type", "text", 1, "form-control"], ["for", "Email"], ["for", "phone"], [1, "col-sm-12"], [1, "card-table"], [1, "card-body"], [1, "table-responsive"], [1, "table-scroll"], ["matSort", "", 1, "table", "table-stripped", "table-hover", "datatable", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "customer"], ["mat-sort-header", "domain"], ["mat-sort-header", "noOfEmployees"], ["mat-sort-header", "package1"], ["mat-sort-header", "createdOn"], ["mat-sort-header", "status"], [1, "toggle-sidebar", 3, "ngClass"], [1, "sidebar-layout-filter"], [1, "sidebar-header"], ["href", "javascript:void(0);", "tabindex", "0", 1, "sidebar-closes", 3, "click", "keydown.enter"], [1, "fa-regular", "fa-circle-xmark"], [1, "sidebar-body"], ["action", "#", "autocomplete", "off"], ["id", "accordionMain1", 1, "accordion"], ["id", "headingOne", 1, "card-header-new"], [1, "filter-title"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "w-100"], [1, "float-end"], [1, "fa-solid", "fa-chevron-down"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample1", 1, "collapse", "show"], [1, "card-body-chat"], [1, "col-md-12"], ["id", "checkBoxes1"], [1, "form-custom"], ["type", "text", "id", "member_search1", "placeholder", "Search here", 1, "form-control"], ["src", "assets/img/icons/search.svg", "alt", "img"], [1, "selectBox-cont"], [1, "custom_check", "w-100"], ["type", "checkbox", "name", "username"], [1, "checkmark"], [1, "view-content"], [1, "viewall-One"], [1, "custom_check", "w-100", 3, "ngClass"], [1, "view-all"], ["href", "javascript:void(0);", 1, "viewall-button-One", 3, "click"], [1, "fa", 3, "ngClass"], ["id", "accordionMain4", 1, "accordion"], ["id", "headingFive", 1, "card-header-new"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-expanded", "true", "aria-controls", "collapseFour", 1, "w-100"], ["id", "collapseFour", "aria-labelledby", "headingFive", "data-bs-parent", "#accordionExample3", 1, "collapse"], ["id", "checkBoxes2"], ["type", "checkbox", "name", "bypackage"], ["id", "accordionMain2", 1, "accordion"], ["id", "headingTwo", 1, "card-header-new"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "true", "aria-controls", "collapseTwo", 1, "w-100", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample2", 1, "collapse"], ["for", "From", 1, "form-control-label"], [1, "cal-icon"], ["type", "email", "placeholder", "DD-MM-YYYY", "bsDatepicker", "", 1, "form-control", "datetimepicker", 3, "bsConfig"], ["for", "To", 1, "form-control-label"], ["id", "accordionMain3", 1, "accordion"], ["id", "headingThree", 1, "card-header-new"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "true", "aria-controls", "collapseThree", 1, "w-100", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample3", 1, "collapse"], ["type", "checkbox", "name", "bystatus"], [1, "filter-buttons"], ["type", "submit", 1, "d-inline-flex", "align-items-center", "justify-content-center", "btn", "w-100", "btn-primary"], ["type", "submit", 1, "d-inline-flex", "align-items-center", "justify-content-center", "btn", "w-100", "btn-secondary"], ["id", "delete_modal", "role", "dialog", 1, "modal", "custom-modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-body"], [1, "form-header"], [1, "modal-btn", "delete-action"], [1, "col-6"], ["type", "reset", "data-bs-dismiss", "modal", 1, "w-100", "btn", "btn-primary", "paid-continue-btn"], ["type", "submit", "data-bs-dismiss", "modal", 1, "w-100", "btn", "btn-primary", "paid-cancel-btn"], [1, "table-avatar"], [3, "routerLink"], [3, "ngClass"], [1, "d-flex", "align-items-center"], [1, "dropdown", "dropdown-action"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn-action-icon"], [1, "fas", "fa-ellipsis-v"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "far", "fa-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item"], [1, "far", "fa-trash-alt", "me-2"], ["type", "checkbox", "name", "username", 3, "ngModelChange", "ngModel"]], template: function DomainRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
      \u0275\u0275text(3, "Domain Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "ul", 3)(6, "li")(7, "a", 4);
      \u0275\u0275listener("click", function DomainRequestComponent_Template_a_click_7_listener() {
        return ctx.openContent();
      })("keydown.enter", function DomainRequestComponent_Template_a_keydown_enter_7_listener() {
        return ctx.openContent();
      });
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275element(9, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "div", 7)(13, "a", 8)(14, "span");
      \u0275\u0275element(15, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 10)(17, "ul", 11)(18, "li")(19, "a", 12);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275text(21, "PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 12);
      \u0275\u0275element(24, "i", 14);
      \u0275\u0275text(25, "CVS");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(26, "li")(27, "a", 15)(28, "span");
      \u0275\u0275element(29, "i", 16);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(30, "div", 17)(31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "label", 22);
      \u0275\u0275text(36, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 20)(39, "div", 21)(40, "label", 24);
      \u0275\u0275text(41, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 20)(44, "div", 21)(45, "label", 25);
      \u0275\u0275text(46, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "input", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(48, "div", 19)(49, "div", 26)(50, "div", 27)(51, "div", 28)(52, "div", 29)(53, "div", 30)(54, "table", 31);
      \u0275\u0275listener("matSortChange", function DomainRequestComponent_Template_table_matSortChange_54_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(55, "thead", 32)(56, "tr")(57, "th");
      \u0275\u0275text(58, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 33);
      \u0275\u0275text(60, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 34);
      \u0275\u0275text(62, "Domain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 35);
      \u0275\u0275text(64, "No of Employees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 36);
      \u0275\u0275text(66, "Package");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 37);
      \u0275\u0275text(68, "Created On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 38);
      \u0275\u0275text(70, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th");
      \u0275\u0275text(72, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "tbody");
      \u0275\u0275repeaterCreate(74, DomainRequestComponent_For_75_Template, 36, 14, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(76, "app-custom-pagination");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "div", 39)(78, "div", 40)(79, "div", 41)(80, "h5");
      \u0275\u0275text(81, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "a", 42);
      \u0275\u0275listener("click", function DomainRequestComponent_Template_a_click_82_listener() {
        return ctx.openContent();
      })("keydown.enter", function DomainRequestComponent_Template_a_keydown_enter_82_listener() {
        return ctx.openContent();
      });
      \u0275\u0275element(83, "i", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 44)(85, "form", 45)(86, "div", 46)(87, "div", 47)(88, "h6", 48)(89, "a", 49);
      \u0275\u0275text(90, " Customer ");
      \u0275\u0275elementStart(91, "span", 50);
      \u0275\u0275element(92, "i", 51);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(93, "div", 52)(94, "div", 53)(95, "div", 19)(96, "div", 54)(97, "div", 55)(98, "div", 56);
      \u0275\u0275element(99, "input", 57);
      \u0275\u0275elementStart(100, "span");
      \u0275\u0275element(101, "img", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 59)(103, "label", 60);
      \u0275\u0275element(104, "input", 61)(105, "span", 62);
      \u0275\u0275text(106, " Orn LLC ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "label", 60);
      \u0275\u0275element(108, "input", 61)(109, "span", 62);
      \u0275\u0275text(110, " Accent-e-Technology ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "label", 60);
      \u0275\u0275element(112, "input", 61)(113, "span", 62);
      \u0275\u0275text(114, " Express Advertising ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "label", 60);
      \u0275\u0275element(116, "input", 61)(117, "span", 62);
      \u0275\u0275text(118, " lexicon Technologies ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 63)(120, "div", 64);
      \u0275\u0275repeaterCreate(121, DomainRequestComponent_For_122_Template, 4, 6, "label", 65, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 66)(124, "a", 67);
      \u0275\u0275listener("click", function DomainRequestComponent_Template_a_click_124_listener() {
        return ctx.toggleCollapse1();
      });
      \u0275\u0275elementStart(125, "span", 5);
      \u0275\u0275text(126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "span");
      \u0275\u0275element(128, "i", 68);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(129, "div", 69)(130, "div", 70)(131, "h6", 48)(132, "a", 71);
      \u0275\u0275text(133, " Package ");
      \u0275\u0275elementStart(134, "span", 50);
      \u0275\u0275element(135, "i", 51);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 72)(137, "div", 53)(138, "div", 73)(139, "div", 59)(140, "label", 60);
      \u0275\u0275element(141, "input", 74)(142, "span", 62);
      \u0275\u0275text(143, " Free trial ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "label", 60);
      \u0275\u0275element(145, "input", 74)(146, "span", 62);
      \u0275\u0275text(147, " Basic ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "label", 60);
      \u0275\u0275element(149, "input", 74)(150, "span", 62);
      \u0275\u0275text(151, " Enterprise ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(152, "div", 75)(153, "div", 76)(154, "h6", 48)(155, "a", 77);
      \u0275\u0275text(156, " Select Date ");
      \u0275\u0275elementStart(157, "span", 50);
      \u0275\u0275element(158, "i", 51);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(159, "div", 78)(160, "div", 53)(161, "div", 21)(162, "label", 79);
      \u0275\u0275text(163, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div", 80);
      \u0275\u0275element(165, "input", 81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 21)(167, "label", 82);
      \u0275\u0275text(168, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "div", 80);
      \u0275\u0275element(170, "input", 81);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(171, "div", 83)(172, "div", 84)(173, "h6", 48)(174, "a", 85);
      \u0275\u0275text(175, " By Status ");
      \u0275\u0275elementStart(176, "span", 50);
      \u0275\u0275element(177, "i", 51);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(178, "div", 86)(179, "div", 53)(180, "div", 73)(181, "div", 59)(182, "label", 60);
      \u0275\u0275element(183, "input", 87)(184, "span", 62);
      \u0275\u0275text(185, " Rejected ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "label", 60);
      \u0275\u0275element(187, "input", 87)(188, "span", 62);
      \u0275\u0275text(189, " Approved ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(190, "div", 88)(191, "button", 89);
      \u0275\u0275text(192, " Apply ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "button", 90);
      \u0275\u0275text(194, " Reset ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(195, "div", 91)(196, "div", 92)(197, "div", 93)(198, "div", 94)(199, "div", 95)(200, "h3");
      \u0275\u0275text(201, "Delete Domain Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "p");
      \u0275\u0275text(203, "Are you sure want to delete?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "div", 96)(205, "div", 19)(206, "div", 97)(207, "button", 98);
      \u0275\u0275text(208, " Delete ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "div", 97)(210, "button", 99);
      \u0275\u0275text(211, " Cancel ");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(74);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx.toggleData === true));
      \u0275\u0275advance(44);
      \u0275\u0275repeater(ctx.users);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.isCollapsed1 ? "Close All" : "View All");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", !ctx.isCollapsed1 ? "fa-circle-chevron-down" : "fa-circle-chevron-up");
      \u0275\u0275advance(37);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(7, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(8, _c1));
    }
  }, dependencies: [CommonModule, NgClass, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, FormsModule, \u0275NgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, CustomPaginationComponent, RouterLink, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomainRequestComponent, [{
    type: Component,
    args: [{ selector: "app-domain-request", imports: [CommonModule, BsDatepickerModule, FormsModule, CustomPaginationComponent, RouterLink, MatSortModule], template: `<!-- Page Header -->
<div class="page-header">
  <div class="content-page-header">
    <h5>Domain Request</h5>
    <div class="list-btn">
      <ul class="filter-list">
        <li>
          <a (click)="openContent()"  (keydown.enter)="openContent()" tabindex="0" class="btn btn-filters w-auto popup-toggle" matTooltip="Filter"><span
          class="me-2"><img src="assets/img/icons/filter-icon.svg" alt="filter" /></span>Filter
        </a>
      </li>
      <li>
        <div class="dropdown dropdown-action" matTooltip="Download">
          <a href="javascript:void(0);" class="btn-filters" data-bs-toggle="dropdown" aria-expanded="false"><span><i
          class="feather icon-download"></i></span></a>
          <div class="dropdown-menu dropdown-menu-end">
            <ul class="d-block">
              <li>
                <a class="d-flex align-items-center download-item" href="javascript:void(0);" download><i
                class="far fa-file-pdf me-2"></i>PDF</a>
              </li>
              <li>
                <a class="d-flex align-items-center download-item" href="javascript:void(0);" download><i
                class="far fa-file-text me-2"></i>CVS</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <a class="btn-filters" href="javascript:void(0);" matTooltip="Print"><span><i
        class="feather icon-printer"></i></span>
      </a>
    </li>
  </ul>
</div>
</div>
</div>
<!-- /Page Header -->

<!-- Search Filter -->
<div id="filter_inputs" class="card filter-card">
  <div class="card-body pb-0">
    <div class="row">
      <div class="col-sm-6 col-md-3">
        <div class="input-block mb-3">
          <label for="name">Name</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="input-block mb-3">
          <label for="Email">Email</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="input-block mb-3">
          <label for="phone">Phone</label>
          <input type="text" class="form-control" />
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /Search Filter -->

<!-- Table -->
<div class="row">
  <div class="col-sm-12">
    <div class="card-table">
      <div class="card-body">
        <div class="table-responsive">
          <div class="table-scroll">
            <table matSort (matSortChange)="sortData($event)" class="table table-stripped table-hover datatable">
              <thead class="thead-light">
                <tr>
                  <th>#</th>
                  <th mat-sort-header="customer">Customer</th>
                  <th mat-sort-header="domain">Domain</th>
                  <th mat-sort-header="noOfEmployees">No of Employees</th>
                  <th mat-sort-header="package1">Package</th>
                  <th mat-sort-header="createdOn">Created On</th>
                  <th mat-sort-header="status">Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                @for (data of tableData; track data) {
                  <tr>
                    <td>{{ data.id }}</td>
                    <td>
                      <h2 class="table-avatar">
                        <a [routerLink] = "routes.profile">{{ data.customer }} <span>{{ data.email }}</span></a>
                      </h2>
                    </td>
                    <td>{{ data.domain }}</td>
                    <td>{{ data.noOfEmployees }}</td>
                    <td>
                      {{ data.package1 }}
                      <p>{{ data.package2 }}</p>
                    </td>
                    <td>{{ data.createdOn }}</td>
                    <td>
                    <span [ngClass]="{
                        'bg-inactive': data.status === 'Rejected',
                        'badge bg-success-light': data.status === 'Approved'
                      }">{{ data.status }}</span>
                    </td>
                    <td class="d-flex align-items-center">
                      <div class="dropdown dropdown-action">
                        <a href="javascript:void(0);" class="btn-action-icon" data-bs-toggle="dropdown"
                          aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <ul>
                              <li>
                                <a class="dropdown-item" href="javascript:void(0);"><i class="far fa-edit me-2"></i>Edit</a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"><i class="far fa-trash-alt me-2"></i>Delete</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <app-custom-pagination></app-custom-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- /Table -->

    <!-- Add Asset -->
    <div class="toggle-sidebar" [ngClass]="{ 'open-filter': toggleData === true }">
      <div class="sidebar-layout-filter">
        <div class="sidebar-header">
          <h5>Filter</h5>
          <a href="javascript:void(0);" (click)="openContent()"  (keydown.enter)="openContent()" tabindex="0" class="sidebar-closes"><i
          class="fa-regular fa-circle-xmark"></i></a>
        </div>
        <div class="sidebar-body">
          <form action="#" autocomplete="off">
            <!-- Customer -->
            <div class="accordion" id="accordionMain1">
              <div class="card-header-new" id="headingOne">
                <h6 class="filter-title">
                  <a href="javascript:void(0);" class="w-100" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Customer
                    <span class="float-end"><i class="fa-solid fa-chevron-down"></i></span>
                  </a>
                </h6>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
                <div class="card-body-chat">
                  <div class="row">
                    <div class="col-md-12">
                      <div id="checkBoxes1">
                        <div class="form-custom">
                          <input type="text" class="form-control" id="member_search1" placeholder="Search here" />
                          <span><img src="assets/img/icons/search.svg" alt="img" /></span>
                        </div>
                        <div class="selectBox-cont">
                          <label class="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span class="checkmark"></span> Orn LLC
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span class="checkmark"></span> Accent-e-Technology
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span class="checkmark"></span> Express Advertising
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span class="checkmark"></span> lexicon Technologies
                          </label>
                          <!-- View All -->
                          <div class="view-content">
                            <div class="viewall-One">
                              @for (user of users; track user) {
<label class="custom_check w-100" [ngClass]="{
                              closed: !isCollapsed1,
                              open: isCollapsed1
                            }">
                                  <input type="checkbox" name="username" [(ngModel)]="user.checked" />
                                  <span class="checkmark"></span> {{ user.name }}
                                </label>
                              }
                            </div>
                            <div class="view-all">
                              <a (click)="toggleCollapse1()" href="javascript:void(0);" class="viewall-button-One"><span
                                class="me-2">{{
                                isCollapsed1 ? "Close All" : "View All"
                              }}</span><span><i class="fa" [ngClass]="
                                  !isCollapsed1
                                    ? 'fa-circle-chevron-down'
                                    : 'fa-circle-chevron-up'
                                "></i></span></a>
                          </div>
                        </div>
                        <!-- /View All -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Customer -->
          <!-- By Package -->
          <div class="accordion" id="accordionMain4">
            <div class="card-header-new" id="headingFive">
              <h6 class="filter-title">
                <a href="javascript:void(0);" class="w-100" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                  aria-expanded="true" aria-controls="collapseFour">
                  Package
                  <span class="float-end"><i class="fa-solid fa-chevron-down"></i></span>
                </a>
              </h6>
            </div>

            <div id="collapseFour" class="collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample3">
              <div class="card-body-chat">
                <div id="checkBoxes2">
                  <div class="selectBox-cont">
                    <label class="custom_check w-100">
                      <input type="checkbox" name="bypackage" />
                      <span class="checkmark"></span> Free trial
                    </label>
                    <label class="custom_check w-100">
                      <input type="checkbox" name="bypackage" />
                      <span class="checkmark"></span> Basic
                    </label>
                    <label class="custom_check w-100">
                      <input type="checkbox" name="bypackage" />
                      <span class="checkmark"></span> Enterprise
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /By Package -->
          <!-- Select Date -->
          <div class="accordion" id="accordionMain2">
            <div class="card-header-new" id="headingTwo">
              <h6 class="filter-title">
                <a href="javascript:void(0);" class="w-100 collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  Select Date
                  <span class="float-end"><i class="fa-solid fa-chevron-down"></i></span>
                </a>
              </h6>
            </div>

            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
              <div class="card-body-chat">
                <div class="input-block mb-3">
                  <label for="From" class="form-control-label">From</label>
                  <div class="cal-icon">
                    <input type="email" class="form-control datetimepicker" placeholder="DD-MM-YYYY" bsDatepicker [bsConfig]="{ adaptivePosition: true }" />
                  </div>
                </div>
                <div class="input-block mb-3">
                  <label for="To" class="form-control-label">To</label>
                  <div class="cal-icon">
                    <input type="email" class="form-control datetimepicker" placeholder="DD-MM-YYYY" bsDatepicker [bsConfig]="{ adaptivePosition: true }" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Select Date -->

          <!-- By Status -->
          <div class="accordion" id="accordionMain3">
            <div class="card-header-new" id="headingThree">
              <h6 class="filter-title">
                <a href="javascript:void(0);" class="w-100 collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  By Status
                  <span class="float-end"><i class="fa-solid fa-chevron-down"></i></span>
                </a>
              </h6>
            </div>

            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
              <div class="card-body-chat">
                <div id="checkBoxes2">
                  <div class="selectBox-cont">
                    <label class="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span class="checkmark"></span> Rejected
                    </label>
                    <label class="custom_check w-100">
                      <input type="checkbox" name="bystatus" />
                      <span class="checkmark"></span> Approved
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /By Status -->
          <div class="filter-buttons">
            <button type="submit" class="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary">
              Apply
            </button>
            <button type="submit" class="d-inline-flex align-items-center justify-content-center btn w-100 btn-secondary">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Asset -->

  <!-- Delete Items Modal -->
  <div class="modal custom-modal fade" id="delete_modal" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Domain Request</h3>
            <p>Are you sure want to delete?</p>
          </div>
          <div class="modal-btn delete-action">
            <div class="row">
              <div class="col-6">
                <button type="reset" data-bs-dismiss="modal" class="w-100 btn btn-primary paid-continue-btn">
                  Delete
                </button>
              </div>
              <div class="col-6">
                <button type="submit" data-bs-dismiss="modal" class="w-100 btn btn-primary paid-cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Items Modal -->` }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomainRequestComponent, { className: "DomainRequestComponent", filePath: "src/app/features/super-admin/domain-request/domain-request.component.ts", lineNumber: 23 });
})();
export {
  DomainRequestComponent
};
//# sourceMappingURL=chunk-YMUCMEDH.js.map
