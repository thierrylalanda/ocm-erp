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
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-6H2KZBXU.js";
import "./chunk-KKWHEPUK.js";
import "./chunk-BLAAMQ2R.js";
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
  NgClass
} from "./chunk-ZV6UYXXV.js";
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-U4CEU3KS.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/super-admin/plans-list/plans-list.component.ts
var _c0 = (a0) => ({ "open-filter": a0 });
var _c1 = () => ({ adaptivePosition: true });
function PlansListComponent_For_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 183);
    \u0275\u0275element(21, "i", 184);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 185)(24, "div", 186)(25, "a", 187);
    \u0275\u0275element(26, "i", 188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 20)(28, "ul", 189)(29, "li")(30, "a", 190);
    \u0275\u0275element(31, "i", 191);
    \u0275\u0275text(32, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li", 192)(34, "a", 193);
    \u0275\u0275element(35, "i", 194);
    \u0275\u0275text(36, "Delete");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r1.planName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.planType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.users);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.suppliers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.products);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.invoice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.createdDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
var PlansListComponent = class _PlansListComponent {
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
  // pagination variables end
  constructor(data, pagination, router) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.pagination.tablePageSize.subscribe((res) => {
      if (this.router.url == this.routes.plansList) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  getTableData(pageOption) {
    this.data.getPlansList().subscribe((apiRes) => {
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
  toggleData = false;
  openContent() {
    this.toggleData = !this.toggleData;
  }
  static \u0275fac = function PlansListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlansListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlansListComponent, selectors: [["app-plans-list"]], decls: 729, vars: 11, consts: [[1, "subscription-plane-head"], [1, "active", 3, "routerLink"], [3, "routerLink"], [1, "page-header"], [1, "content-page-header"], [1, "page-content"], [1, "list-btn"], [1, "filter-list"], ["data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Grid-View", "matTooltip", "Grid-View", 1, "btn-filters", 3, "routerLink"], [1, "feather", "icon-grid"], ["data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "List-View", "matTooltip", "List-View", 1, "btn-filters", "active", 3, "routerLink"], [1, "feather", "icon-list"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Refresh", "matTooltip", "Refresh", 1, "btn-filters"], [1, "feather", "icon-refresh-ccw"], ["data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Filter", "matTooltip", "Filter", 1, "btn", "btn-filters", "w-auto", "popup-toggle", 3, "click"], [1, "me-2"], ["src", "assets/img/icons/filter-icon.svg", "alt", "filter"], ["data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Download", "matTooltip", "Download", 1, "dropdown", "dropdown-action"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-filters"], [1, "feather", "icon-download"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "d-block"], ["href", "javascript:void(0);", "download", "", 1, "d-flex", "align-items-center", "download-item"], [1, "far", "fa-file-pdf", "me-2"], [1, "far", "fa-file-text", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Print", "matTooltip", "Print", 1, "btn", "btn-filters"], [1, "feather", "icon-printer"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_newpackage", 1, "btn", "btn-primary"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "me-2"], [1, "super-admin-list-head"], [1, "row"], [1, "col-xl-3", "col-md-6", "d-flex"], [1, "card"], [1, "card-body"], [1, "grid-info-item", "total-plane"], [1, "grid-info"], [1, "grid-head-icon"], [1, "feather", "icon-package"], [1, "grid-info-item", "active-plane"], [1, "grid-info-item", "inactive-plane"], [1, "feather", "icon-pause-circle"], [1, "card", "w-100"], [1, "grid-info-item", "total-type"], [1, "feather", "icon-pocket"], [1, "col-sm-12"], [1, "card-table"], [1, "table-responsive", "no-pagination"], [1, "companies-table"], ["matSort", "", 1, "table", "table-center", "table-hover", "datatable", 3, "matSortChange"], [1, "thead-light"], ["Class", "no-sort"], ["mat-sort-header", "planName"], ["mat-sort-header", "planType"], ["mat-sort-header", "price"], ["mat-sort-header", "users"], ["mat-sort-header", "suppliers"], ["mat-sort-header", "products"], ["mat-sort-header", "invoice"], ["mat-sort-header", "createdDate"], ["mat-sort-header", "status"], [1, "toggle-sidebar", 3, "ngClass"], [1, "sidebar-layout-filter"], [1, "sidebar-header"], ["href", "javascript:void(0);", 1, "sidebar-closes", 3, "click"], [1, "fa-regular", "fa-circle-xmark"], [1, "sidebar-body"], ["action", "#", "autocomplete", "off"], ["id", "accordionMain3", 1, "accordion"], ["id", "headingThree", 1, "card-header-new"], [1, "filter-title"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "true", "aria-controls", "collapseThree", 1, "w-100", "collapsed"], [1, "float-end"], [1, "fa-solid", "fa-chevron-down"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample3", 1, "collapse"], [1, "card-body-chat"], ["id", "checkBoxes2"], [1, "selectBox-cont"], [1, "custom_check", "w-100"], ["type", "checkbox", "name", "bystatus"], [1, "checkmark"], ["id", "accordionMain4", 1, "accordion"], ["id", "headingFour", 1, "card-header-new"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-expanded", "true", "aria-controls", "collapseFour", 1, "w-100", "collapsed"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample4", 1, "collapse"], ["id", "checkBoxes3"], ["id", "accordionMain2", 1, "accordion", "accordion-last"], ["id", "headingTwo", 1, "card-header-new"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "true", "aria-controls", "collapseTwo", 1, "w-100", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample2", 1, "collapse"], [1, "input-block", "mb-3"], [1, "form-control-label"], [1, "cal-icon"], ["type", "email", "bsDatepicker", "", "placeholder", "DD-MM-YYYY", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "filter-buttons"], ["type", "submit", 1, "d-inline-flex", "align-items-center", "justify-content-center", "btn", "w-100", "btn-primary"], ["type", "submit", 1, "d-inline-flex", "align-items-center", "justify-content-center", "btn", "w-100", "btn-secondary"], ["id", "add_newpackage", "role", "dialog", 1, "modal", "custom-modal", "fade", "p-20"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header", "border-0"], [1, "form-header", "modal-header-title", "text-start", "mb-0"], [1, "mb-0"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["action", "#"], [1, "modal-body"], [1, "form-title"], [1, "col-md-12"], [1, "profile-picture"], [1, "upload-profile"], [1, "profile-img", "company-profile-img"], ["id", "company-img", "src", "assets/img/companies/company-add-img.svg", "alt", "profile-img", 1, "img-fluid", "me-0"], [1, "add-profile"], [1, "img-upload"], [1, "btn", "btn-upload"], ["type", "file"], [1, "btn", "btn-remove"], [1, "form-title", "mb-3"], [1, "col-sm-12", "col-md-6"], ["type", "text", "placeholder", "Enter Plan Name", "value", "", 1, "form-control"], ["placeholder", "Monthly", 1, "select", "custom-mat-select"], ["value", "Monthly"], ["value", "Yearly"], ["value", "free Trail"], ["placeholder", "1", 1, "select", "custom-mat-select"], ["value", "1"], ["value", "2"], ["value", "3"], ["placeholder", "USD", 1, "select", "custom-mat-select"], ["value", "USD"], ["value", "$"], [1, "d-flex", "justify-content-between"], [1, "text-primary"], [1, "fa-solid", "fa-circle-exclamation", "me-2"], ["type", "text", "placeholder", "Enter Package Price", 1, "form-control"], [1, "col-sm-12", "col-md-3"], ["placeholder", "Fixed", 1, "select", "custom-mat-select"], ["value", "Fixed"], ["value", "Percentage"], ["type", "text", "placeholder", "Enter Discount", 1, "form-control"], [1, "col-sm-12", "col-md-6", "col-lg-3"], ["type", "number", "placeholder", "0", 1, "form-control"], [1, "col-lg-12"], [1, "checkboxes"], ["type", "checkbox", "name", "checkbox", "checked", ""], [1, "col-lg-3", "col-sm-6"], [1, "d-flex", "align-items-center", "mb-3"], [1, "status-toggle"], ["id", "access-trail", "type", "checkbox", "checked", "", 1, "check"], ["for", "access-trail", 1, "checktoggle", "checkbox-bg"], [1, "row", "align-items-center"], [1, "col-sm-12", "col-md-8"], [1, "col-md-4"], ["id", "recommended", "type", "checkbox", 1, "check"], ["for", "recommended", 1, "checktoggle", "checkbox-bg"], ["rows", "3", "cols", "5", "placeholder", "Enter Description", 1, "form-control"], ["id", "status-2", "type", "checkbox", 1, "check"], ["for", "status-2", 1, "checktoggle", "checkbox-bg"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-back", "cancel-btn", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "paid-continue-btn"], ["id", "edit_package", "role", "dialog", 1, "modal", "custom-modal", "custom-lg-modal", "fade", "p-20"], ["id", "company-img-2", "src", "assets/img/icons/price-02.svg", "alt", "profile-img", 1, "img-fluid", "me-0"], ["type", "text", "placeholder", "Enter Plan Name", "value", "Enterprise", 1, "form-control"], ["type", "text", "placeholder", "Enter Package Price", "value", "4545", 1, "form-control"], ["type", "text", "placeholder", "Enter Discount", "value", "5%", 1, "form-control"], ["type", "number", "placeholder", "0", "value", "50", 1, "form-control"], ["type", "number", "placeholder", "0", "value", "250", 1, "form-control"], ["type", "number", "placeholder", "0", "value", "110", 1, "form-control"], ["type", "number", "placeholder", "0", "value", "14", 1, "form-control"], ["id", "access-trail-2", "type", "checkbox", "checked", "", 1, "check"], ["for", "access-trail-2", 1, "checktoggle", "checkbox-bg"], ["id", "recommended-2", "type", "checkbox", 1, "check"], ["for", "recommended-2", 1, "checktoggle", "checkbox-bg"], ["id", "status", "type", "checkbox", 1, "check"], ["for", "status", 1, "checktoggle", "checkbox-bg"], ["id", "delete_modal", "role", "dialog", 1, "modal", "custom-modal", "fade", "modal-delete"], [1, "form-header"], [1, "delete-modal-icon"], [1, "feather", "icon-check-circle"], [1, "modal-btn", "delete-action"], [1, "modal-footer", "justify-content-center", "p-0"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", "paid-continue-btn", "me-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-back", "cancel-btn"], [1, "badge", "bg-success-light", "d-inline-flex", "align-items-center"], [1, "feather", "icon-check", "me-1"], [1, "d-flex", "align-items-center"], [1, "dropdown", "dropdown-action"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn-action-icon"], [1, "fas", "fa-ellipsis-v"], [1, "dropdown-ul"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_package", 1, "dropdown-item"], [1, "feather", "icon-edit", "me-2"], [1, "delete-alt"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item"], [1, "feather", "icon-trash-2", "me-2"]], template: function PlansListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ul")(2, "li")(3, "a", 1);
      \u0275\u0275text(4, "Subscription Plans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "li")(6, "a", 2);
      \u0275\u0275text(7, "Subscribers List");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "h5");
      \u0275\u0275text(11, "Plans List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "ul", 7)(15, "li")(16, "a", 8)(17, "span");
      \u0275\u0275element(18, "i", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "li")(20, "a", 10)(21, "span");
      \u0275\u0275element(22, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "li")(24, "a", 12)(25, "span");
      \u0275\u0275element(26, "i", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "li")(28, "a", 14);
      \u0275\u0275listener("click", function PlansListComponent_Template_a_click_28_listener() {
        return ctx.openContent();
      });
      \u0275\u0275elementStart(29, "span", 15);
      \u0275\u0275element(30, "img", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, "Filter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "div", 17)(34, "a", 18)(35, "span", 15);
      \u0275\u0275element(36, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, "Export");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 20)(39, "ul", 21)(40, "li")(41, "a", 22);
      \u0275\u0275element(42, "i", 23);
      \u0275\u0275text(43, "Export as PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 22);
      \u0275\u0275element(46, "i", 24);
      \u0275\u0275text(47, "Export as Excel");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(48, "li")(49, "a", 25)(50, "span", 15);
      \u0275\u0275element(51, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275text(52, " Print ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 27);
      \u0275\u0275element(55, "i", 28);
      \u0275\u0275text(56, "Add Plan");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(57, "div", 29)(58, "div", 30)(59, "div", 31)(60, "div", 32)(61, "div", 33)(62, "div", 34)(63, "div", 35)(64, "span");
      \u0275\u0275text(65, "Total Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h4");
      \u0275\u0275text(67, "07");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 36);
      \u0275\u0275element(69, "i", 37);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(70, "div", 31)(71, "div", 32)(72, "div", 33)(73, "div", 38)(74, "div", 35)(75, "span");
      \u0275\u0275text(76, "Active Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "h4");
      \u0275\u0275text(78, "07");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 36);
      \u0275\u0275element(80, "i", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(81, "div", 31)(82, "div", 32)(83, "div", 33)(84, "div", 39)(85, "div", 35)(86, "span");
      \u0275\u0275text(87, "Inactive Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "h4");
      \u0275\u0275text(89, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 36);
      \u0275\u0275element(91, "i", 40);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(92, "div", 31)(93, "div", 41)(94, "div", 33)(95, "div", 42)(96, "div", 35)(97, "span");
      \u0275\u0275text(98, "No of Plan Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "h4");
      \u0275\u0275text(100, "04");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 36);
      \u0275\u0275element(102, "i", 43);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(103, "div", 30)(104, "div", 44)(105, "div", 45)(106, "div", 33)(107, "div", 46)(108, "div", 47)(109, "table", 48);
      \u0275\u0275listener("matSortChange", function PlansListComponent_Template_table_matSortChange_109_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(110, "thead", 49)(111, "tr")(112, "th", 50);
      \u0275\u0275text(113, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 51);
      \u0275\u0275text(115, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 52);
      \u0275\u0275text(117, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 53);
      \u0275\u0275text(119, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 54);
      \u0275\u0275text(121, "Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th", 55);
      \u0275\u0275text(123, "Suppliers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th", 56);
      \u0275\u0275text(125, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th", 57);
      \u0275\u0275text(127, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "th", 58);
      \u0275\u0275text(129, "Created Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th", 59);
      \u0275\u0275text(131, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "th", 50);
      \u0275\u0275text(133, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "tbody");
      \u0275\u0275repeaterCreate(135, PlansListComponent_For_136_Template, 37, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(137, "app-custom-pagination");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(138, "div", 60)(139, "div", 61)(140, "div", 62)(141, "h5");
      \u0275\u0275text(142, "Filter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "a", 63);
      \u0275\u0275listener("click", function PlansListComponent_Template_a_click_143_listener() {
        return ctx.openContent();
      });
      \u0275\u0275element(144, "i", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 65)(146, "form", 66)(147, "div", 67)(148, "div", 68)(149, "h6", 69)(150, "a", 70);
      \u0275\u0275text(151, " Plans ");
      \u0275\u0275elementStart(152, "span", 71);
      \u0275\u0275element(153, "i", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(154, "div", 73)(155, "div", 74)(156, "div", 75)(157, "div", 76)(158, "label", 77);
      \u0275\u0275element(159, "input", 78)(160, "span", 79);
      \u0275\u0275text(161, " All Plans ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "label", 77);
      \u0275\u0275element(163, "input", 78)(164, "span", 79);
      \u0275\u0275text(165, " Advanced ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "label", 77);
      \u0275\u0275element(167, "input", 78)(168, "span", 79);
      \u0275\u0275text(169, " Basic ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "label", 77);
      \u0275\u0275element(171, "input", 78)(172, "span", 79);
      \u0275\u0275text(173, " Enterprise ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "label", 77);
      \u0275\u0275element(175, "input", 78)(176, "span", 79);
      \u0275\u0275text(177, "Premium ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "label", 77);
      \u0275\u0275element(179, "input", 78)(180, "span", 79);
      \u0275\u0275text(181, "Free ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(182, "div", 80)(183, "div", 81)(184, "h6", 69)(185, "a", 82);
      \u0275\u0275text(186, " Plans Type ");
      \u0275\u0275elementStart(187, "span", 71);
      \u0275\u0275element(188, "i", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(189, "div", 83)(190, "div", 74)(191, "div", 84)(192, "div", 76)(193, "label", 77);
      \u0275\u0275element(194, "input", 78)(195, "span", 79);
      \u0275\u0275text(196, " All Plan Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "label", 77);
      \u0275\u0275element(198, "input", 78)(199, "span", 79);
      \u0275\u0275text(200, " Monthly ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "label", 77);
      \u0275\u0275element(202, "input", 78)(203, "span", 79);
      \u0275\u0275text(204, " Weekly ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "label", 77);
      \u0275\u0275element(206, "input", 78)(207, "span", 79);
      \u0275\u0275text(208, "Lifetime ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(209, "div", 85)(210, "div", 86)(211, "h6", 69)(212, "a", 87);
      \u0275\u0275text(213, " Created Date ");
      \u0275\u0275elementStart(214, "span", 71);
      \u0275\u0275element(215, "i", 72);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(216, "div", 88)(217, "div", 74)(218, "div", 89)(219, "label", 90);
      \u0275\u0275text(220, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 91);
      \u0275\u0275element(222, "input", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "div", 89)(224, "label", 90);
      \u0275\u0275text(225, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 91);
      \u0275\u0275element(227, "input", 92);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(228, "div", 93)(229, "button", 94);
      \u0275\u0275text(230, " Apply ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "button", 95);
      \u0275\u0275text(232, " Reset ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(233, "div", 96)(234, "div", 97)(235, "div", 98)(236, "div", 99)(237, "div", 100)(238, "h4", 101);
      \u0275\u0275text(239, "Add New");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(240, "button", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "form", 103)(242, "div", 104)(243, "h5", 105);
      \u0275\u0275text(244, "Plan Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div", 30)(246, "div", 106)(247, "div", 107)(248, "div", 108)(249, "div", 109);
      \u0275\u0275element(250, "img", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 111)(252, "h5");
      \u0275\u0275text(253, "Upload a New Photo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "span");
      \u0275\u0275text(255, "Profile-pic.jpg");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(256, "div", 112)(257, "label", 113);
      \u0275\u0275text(258, " Upload ");
      \u0275\u0275element(259, "input", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "a", 115);
      \u0275\u0275text(261, "Remove");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(262, "div", 106)(263, "h5", 116);
      \u0275\u0275text(264, "Plan Info");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(265, "div", 117)(266, "div", 89)(267, "label");
      \u0275\u0275text(268, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(269, "input", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "div", 117)(271, "div", 89)(272, "label");
      \u0275\u0275text(273, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "mat-select", 119)(275, "mat-option", 120);
      \u0275\u0275text(276, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "mat-option", 121);
      \u0275\u0275text(278, "Yearly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "mat-option", 122);
      \u0275\u0275text(280, "Free Trial");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(281, "div", 117)(282, "div", 89)(283, "label");
      \u0275\u0275text(284, "Plan Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "mat-select", 123)(286, "mat-option", 124);
      \u0275\u0275text(287, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "mat-option", 125);
      \u0275\u0275text(289, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "mat-option", 126);
      \u0275\u0275text(291, "3");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(292, "div", 117)(293, "div", 89)(294, "label");
      \u0275\u0275text(295, "Plan Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "mat-select", 127)(297, "mat-option", 128);
      \u0275\u0275text(298, "USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "mat-option", 129);
      \u0275\u0275text(300, "$");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(301, "div", 117)(302, "div", 89)(303, "label", 130)(304, "span");
      \u0275\u0275text(305, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "span", 131);
      \u0275\u0275element(307, "i", 132);
      \u0275\u0275text(308, "Set 0 for free");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(309, "input", 133);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "div", 134)(311, "div", 89)(312, "label");
      \u0275\u0275text(313, "Discount Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "mat-select", 135)(315, "mat-option", 136);
      \u0275\u0275text(316, "Fixed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "mat-option", 137);
      \u0275\u0275text(318, "Percentage");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(319, "div", 134)(320, "div", 89)(321, "label");
      \u0275\u0275text(322, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(323, "input", 138);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "div", 139)(325, "div", 89)(326, "label");
      \u0275\u0275text(327, "Limitations Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275element(328, "input", 140);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(329, "div", 139)(330, "div", 89)(331, "label");
      \u0275\u0275text(332, "Max Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275element(333, "input", 140);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "div", 139)(335, "div", 89)(336, "label");
      \u0275\u0275text(337, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275element(338, "input", 140);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "div", 139)(340, "div", 89)(341, "label");
      \u0275\u0275text(342, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275element(343, "input", 140);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(344, "h6");
      \u0275\u0275text(345, "Plan Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "div", 89)(347, "div", 30)(348, "div", 141)(349, "div", 142)(350, "label");
      \u0275\u0275element(351, "input", 143);
      \u0275\u0275text(352, " Select All ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(353, "div", 144)(354, "div", 142)(355, "label");
      \u0275\u0275element(356, "input", 143);
      \u0275\u0275text(357, " Invoices ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(358, "div", 144)(359, "div", 142)(360, "label");
      \u0275\u0275element(361, "input", 143);
      \u0275\u0275text(362, " Payments ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(363, "div", 144)(364, "div", 142)(365, "label");
      \u0275\u0275element(366, "input", 143);
      \u0275\u0275text(367, " Payment Summary ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(368, "div", 144)(369, "div", 142)(370, "label");
      \u0275\u0275element(371, "input", 143);
      \u0275\u0275text(372, "Vendors ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(373, "div", 144)(374, "div", 142)(375, "label");
      \u0275\u0275element(376, "input", 143);
      \u0275\u0275text(377, " Estimates ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(378, "div", 144)(379, "div", 142)(380, "label");
      \u0275\u0275element(381, "input", 143);
      \u0275\u0275text(382, " Quotations ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(383, "div", 144)(384, "div", 142)(385, "label");
      \u0275\u0275element(386, "input", 143);
      \u0275\u0275text(387, " Memberships ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(388, "div", 144)(389, "div", 142)(390, "label");
      \u0275\u0275element(391, "input", 143);
      \u0275\u0275text(392, "Customers ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(393, "div", 144)(394, "div", 142)(395, "label");
      \u0275\u0275element(396, "input", 143);
      \u0275\u0275text(397, " Recurring Invoices ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(398, "div", 144)(399, "div", 142)(400, "label");
      \u0275\u0275element(401, "input", 143);
      \u0275\u0275text(402, " Delivery Challans ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(403, "div", 144)(404, "div", 142)(405, "label");
      \u0275\u0275element(406, "input", 143);
      \u0275\u0275text(407, " Products ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(408, "div", 144)(409, "div", 142)(410, "label");
      \u0275\u0275element(411, "input", 143);
      \u0275\u0275text(412, "Vendors ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(413, "div", 144)(414, "div", 142)(415, "label");
      \u0275\u0275element(416, "input", 143);
      \u0275\u0275text(417, " Expenses ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(418, "div", 144)(419, "div", 142)(420, "label");
      \u0275\u0275element(421, "input", 143);
      \u0275\u0275text(422, " Reports ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(423, "div", 144)(424, "div", 142)(425, "label");
      \u0275\u0275element(426, "input", 143);
      \u0275\u0275text(427, " Inventory ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(428, "div", 144)(429, "div", 142)(430, "label");
      \u0275\u0275element(431, "input", 143);
      \u0275\u0275text(432, "Signature ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(433, "div", 145)(434, "h6", 101);
      \u0275\u0275text(435, "Access Trial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "div", 146);
      \u0275\u0275element(437, "input", 147);
      \u0275\u0275elementStart(438, "label", 148);
      \u0275\u0275text(439, "checkbox");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(440, "div", 149)(441, "div", 150)(442, "div", 89)(443, "label");
      \u0275\u0275text(444, "Trial Days");
      \u0275\u0275elementEnd();
      \u0275\u0275element(445, "input", 140);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(446, "div", 151)(447, "div", 145)(448, "h6", 101);
      \u0275\u0275text(449, "Is Recommended");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "div", 146);
      \u0275\u0275element(451, "input", 152);
      \u0275\u0275elementStart(452, "label", 153);
      \u0275\u0275text(453, "checkbox");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(454, "div", 30)(455, "div", 44)(456, "div", 89)(457, "label");
      \u0275\u0275text(458, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(459, "textarea", 154);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(460, "div", 145)(461, "h6", 101);
      \u0275\u0275text(462, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "div", 146);
      \u0275\u0275element(464, "input", 155);
      \u0275\u0275elementStart(465, "label", 156);
      \u0275\u0275text(466, "checkbox");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(467, "div", 157)(468, "button", 158);
      \u0275\u0275text(469, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "button", 159);
      \u0275\u0275text(471, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(472, "div", 160)(473, "div", 97)(474, "div", 98)(475, "div", 99)(476, "div", 100)(477, "h4", 101);
      \u0275\u0275text(478, "Edit Package");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(479, "button", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "form", 103)(481, "div", 104)(482, "h5", 105);
      \u0275\u0275text(483, "Plan Image");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "div", 30)(485, "div", 106)(486, "div", 107)(487, "div", 108)(488, "div", 109);
      \u0275\u0275element(489, "img", 161);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(490, "div", 111)(491, "h5");
      \u0275\u0275text(492, "Upload a New Photo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "span");
      \u0275\u0275text(494, "Profile-pic.jpg");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(495, "div", 112)(496, "label", 113);
      \u0275\u0275text(497, " Upload ");
      \u0275\u0275element(498, "input", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "a", 115);
      \u0275\u0275text(500, "Remove");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(501, "div", 106)(502, "h5", 116);
      \u0275\u0275text(503, "Plan Info");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "div", 117)(505, "div", 89)(506, "label");
      \u0275\u0275text(507, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(508, "input", 162);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(509, "div", 117)(510, "div", 89)(511, "label");
      \u0275\u0275text(512, "Plan Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(513, "mat-select", 119)(514, "mat-option", 120);
      \u0275\u0275text(515, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(516, "mat-option", 121);
      \u0275\u0275text(517, "Yearly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "mat-option", 122);
      \u0275\u0275text(519, "Free Trial");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(520, "div", 117)(521, "div", 89)(522, "label");
      \u0275\u0275text(523, "Plan Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "mat-select", 123)(525, "mat-option", 124);
      \u0275\u0275text(526, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "mat-option", 125);
      \u0275\u0275text(528, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "mat-option", 126);
      \u0275\u0275text(530, "3");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(531, "div", 117)(532, "div", 89)(533, "label");
      \u0275\u0275text(534, "Plan Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "mat-select", 127)(536, "mat-option", 128);
      \u0275\u0275text(537, "USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "mat-option", 129);
      \u0275\u0275text(539, "$");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(540, "div", 117)(541, "div", 89)(542, "label", 130)(543, "span");
      \u0275\u0275text(544, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "span", 131);
      \u0275\u0275element(546, "i", 132);
      \u0275\u0275text(547, "Set 0 for free");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(548, "input", 163);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(549, "div", 134)(550, "div", 89)(551, "label");
      \u0275\u0275text(552, "Discount Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "mat-select", 135)(554, "mat-option", 136);
      \u0275\u0275text(555, "Fixed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(556, "mat-option", 137);
      \u0275\u0275text(557, "Percentage");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(558, "div", 134)(559, "div", 89)(560, "label");
      \u0275\u0275text(561, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(562, "input", 164);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(563, "div", 139)(564, "div", 89)(565, "label");
      \u0275\u0275text(566, "Limitations Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275element(567, "input", 165);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(568, "div", 139)(569, "div", 89)(570, "label");
      \u0275\u0275text(571, "Max Customers");
      \u0275\u0275elementEnd();
      \u0275\u0275element(572, "input", 166);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(573, "div", 139)(574, "div", 89)(575, "label");
      \u0275\u0275text(576, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275element(577, "input", 167);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(578, "div", 139)(579, "div", 89)(580, "label");
      \u0275\u0275text(581, "Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275element(582, "input", 168);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(583, "h6");
      \u0275\u0275text(584, "Plan Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(585, "div", 89)(586, "div", 30)(587, "div", 141)(588, "div", 142)(589, "label");
      \u0275\u0275element(590, "input", 143);
      \u0275\u0275text(591, " Select All ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(592, "div", 144)(593, "div", 142)(594, "label");
      \u0275\u0275element(595, "input", 143);
      \u0275\u0275text(596, " Invoices ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(597, "div", 144)(598, "div", 142)(599, "label");
      \u0275\u0275element(600, "input", 143);
      \u0275\u0275text(601, " Payments ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(602, "div", 144)(603, "div", 142)(604, "label");
      \u0275\u0275element(605, "input", 143);
      \u0275\u0275text(606, " Payment Summary ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(607, "div", 144)(608, "div", 142)(609, "label");
      \u0275\u0275element(610, "input", 143);
      \u0275\u0275text(611, "Vendors ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(612, "div", 144)(613, "div", 142)(614, "label");
      \u0275\u0275element(615, "input", 143);
      \u0275\u0275text(616, " Estimates ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(617, "div", 144)(618, "div", 142)(619, "label");
      \u0275\u0275element(620, "input", 143);
      \u0275\u0275text(621, " Quotations ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(622, "div", 144)(623, "div", 142)(624, "label");
      \u0275\u0275element(625, "input", 143);
      \u0275\u0275text(626, " Memberships ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(627, "div", 144)(628, "div", 142)(629, "label");
      \u0275\u0275element(630, "input", 143);
      \u0275\u0275text(631, "Customers ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(632, "div", 144)(633, "div", 142)(634, "label");
      \u0275\u0275element(635, "input", 143);
      \u0275\u0275text(636, " Recurring Invoices ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(637, "div", 144)(638, "div", 142)(639, "label");
      \u0275\u0275element(640, "input", 143);
      \u0275\u0275text(641, " Delivery Challans ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(642, "div", 144)(643, "div", 142)(644, "label");
      \u0275\u0275element(645, "input", 143);
      \u0275\u0275text(646, " Products ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(647, "div", 144)(648, "div", 142)(649, "label");
      \u0275\u0275element(650, "input", 143);
      \u0275\u0275text(651, "Vendors ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(652, "div", 144)(653, "div", 142)(654, "label");
      \u0275\u0275element(655, "input", 143);
      \u0275\u0275text(656, " Expenses ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(657, "div", 144)(658, "div", 142)(659, "label");
      \u0275\u0275element(660, "input", 143);
      \u0275\u0275text(661, " Reports ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(662, "div", 144)(663, "div", 142)(664, "label");
      \u0275\u0275element(665, "input", 143);
      \u0275\u0275text(666, " Inventory ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(667, "div", 144)(668, "div", 142)(669, "label");
      \u0275\u0275element(670, "input", 143);
      \u0275\u0275text(671, "Signature ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(672, "div", 145)(673, "h6", 101);
      \u0275\u0275text(674, "Access Trial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(675, "div", 146);
      \u0275\u0275element(676, "input", 169);
      \u0275\u0275elementStart(677, "label", 170);
      \u0275\u0275text(678, "checkbox");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(679, "div", 149)(680, "div", 150)(681, "div", 89)(682, "label");
      \u0275\u0275text(683, "Trial Days");
      \u0275\u0275elementEnd();
      \u0275\u0275element(684, "input", 140);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(685, "div", 151)(686, "div", 145)(687, "h6", 101);
      \u0275\u0275text(688, "Is Recommended");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(689, "div", 146);
      \u0275\u0275element(690, "input", 171);
      \u0275\u0275elementStart(691, "label", 172);
      \u0275\u0275text(692, "checkbox");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(693, "div", 30)(694, "div", 44)(695, "div", 89)(696, "label");
      \u0275\u0275text(697, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(698, "textarea", 154);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(699, "div", 145)(700, "h6", 101);
      \u0275\u0275text(701, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(702, "div", 146);
      \u0275\u0275element(703, "input", 173);
      \u0275\u0275elementStart(704, "label", 174);
      \u0275\u0275text(705, "checkbox");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(706, "div", 157)(707, "button", 158);
      \u0275\u0275text(708, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(709, "button", 159);
      \u0275\u0275text(710, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(711, "div", 175)(712, "div", 97)(713, "div", 98)(714, "div", 104)(715, "div", 176)(716, "div", 177)(717, "span");
      \u0275\u0275element(718, "i", 178);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(719, "h3");
      \u0275\u0275text(720, "Are You Sure?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "p");
      \u0275\u0275text(722, "You want delete plan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(723, "div", 179)(724, "div", 180)(725, "button", 181);
      \u0275\u0275text(726, "Yes, Delete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(727, "button", 182);
      \u0275\u0275text(728, "No, Cancel");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.packages);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.subscriptions);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.packages);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.plansList);
      \u0275\u0275advance(115);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c0, ctx.toggleData === true));
      \u0275\u0275advance(84);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(9, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(10, _c1));
    }
  }, dependencies: [CommonModule, NgClass, MatSelectModule, MatSelect, MatOption, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlansListComponent, [{
    type: Component,
    args: [{ selector: "app-plans-list", imports: [CommonModule, MatSelectModule, BsDatepickerModule, CustomPaginationComponent, MatSortModule, RouterLink], template: `<div class="subscription-plane-head">
  <ul>
    <li>
      <a [routerLink] = "routes.packages" class="active">Subscription Plans</a>
    </li>
    <li>
      <a [routerLink] = "routes.subscriptions">Subscribers List</a>
    </li>
  </ul>
</div>
<!-- Page Header -->
<div class="page-header">
  <div class="content-page-header">
    <h5>Plans List</h5>
    <div class="page-content">
      <div class="list-btn">
        <ul class="filter-list">
          <li>
            <a class="btn-filters" [routerLink] = "routes.packages" data-bs-toggle="tooltip" data-bs-placement="bottom"
              title="Grid-View" matTooltip="Grid-View"><span><i class="feather icon-grid"></i></span></a>
            </li>
            <li>
              <a class="btn-filters active" [routerLink] = "routes.plansList" data-bs-toggle="tooltip"
                data-bs-placement="bottom" title="List-View" matTooltip="List-View"><span><i class="feather icon-list"></i></span></a>
              </li>
              <li>
                <a class="btn-filters" href="javascript:void(0);" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" title="Refresh" matTooltip="Refresh"><span><i
                class="feather icon-refresh-ccw"></i></span></a>
              </li>
              <li>
                <a (click)="openContent()" class="btn btn-filters w-auto popup-toggle" data-bs-toggle="tooltip"
                  data-bs-placement="bottom" title="Filter" matTooltip="Filter"><span class="me-2"><img
                src="assets/img/icons/filter-icon.svg" alt="filter"></span>Filter
              </a>
            </li>

            <li>
              <div class="dropdown dropdown-action" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="Download" matTooltip="Download">
                <a href="javascript:void(0);" class="btn btn-filters" data-bs-toggle="dropdown" aria-expanded="false"><span
                  class="me-2"><i class="feather icon-download"></i></span>Export</a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <ul class="d-block">
                      <li>
                        <a class="d-flex align-items-center download-item" href="javascript:void(0);"
                          download><i class="far fa-file-pdf me-2"></i>Export as PDF</a>
                        </li>
                        <li>
                          <a class="d-flex align-items-center download-item" href="javascript:void(0);"
                            download><i class="far fa-file-text me-2"></i>Export as Excel</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a class="btn btn-filters" href="javascript:void(0);" data-bs-toggle="tooltip"
                      data-bs-placement="bottom" title="Print" matTooltip="Print"><span class="me-2"><i
                    class="feather icon-printer"></i></span> Print
                  </a>
                </li>
                <li>
                  <a class="btn btn-primary" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_newpackage"><i
                  class="fa fa-plus-circle me-2" aria-hidden="true"></i>Add Plan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <div class="super-admin-list-head">
        <div class="row">
          <div class="col-xl-3 col-md-6 d-flex">
            <div class="card">
              <div class="card-body">
                <div class="grid-info-item total-plane">
                  <div class="grid-info">
                    <span>Total Plan</span>
                    <h4>07</h4>
                  </div>
                  <div class="grid-head-icon">
                    <i class="feather icon-package"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 d-flex">
            <div class="card">
              <div class="card-body">
                <div class="grid-info-item active-plane">
                  <div class="grid-info">
                    <span>Active Plans</span>
                    <h4>07</h4>
                  </div>
                  <div class="grid-head-icon">
                    <i class="feather icon-list"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 d-flex">
            <div class="card">
              <div class="card-body">
                <div class="grid-info-item inactive-plane">
                  <div class="grid-info">
                    <span>Inactive Plans</span>
                    <h4>0</h4>
                  </div>
                  <div class="grid-head-icon">
                    <i class="feather icon-pause-circle"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 d-flex">
            <div class="card w-100">
              <div class="card-body">
                <div class="grid-info-item total-type">
                  <div class="grid-info">
                    <span>No of Plan Types</span>
                    <h4>04</h4>
                  </div>
                  <div class="grid-head-icon">
                    <i class="feather icon-pocket"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="card-table">
            <div class="card-body">
              <div class="table-responsive no-pagination">
                <div class="companies-table">
                  <table matSort (matSortChange)="sortData($event)" class="table table-center table-hover datatable">
                    <thead class="thead-light">
                      <tr>
                        <th Class="no-sort">#</th>
                        <th mat-sort-header="planName">Plan Name</th>
                        <th mat-sort-header="planType">Plan Type</th>
                        <th mat-sort-header="price">Price</th>
                        <th mat-sort-header="users">Users</th>
                        <th mat-sort-header="suppliers">Suppliers</th>
                        <th mat-sort-header="products">Products</th>
                        <th mat-sort-header="invoice">Invoice</th>
                        <th mat-sort-header="createdDate">Created Date</th>
                        <th mat-sort-header="status">Status</th>
                        <th Class="no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      @for (data of tableData; track data) {
                        <tr>
                          <td>{{data.id}}</td>
                          <td>
                            {{data.planName}}
                          </td>
                          <td>{{data.planType}}</td>
                          <td>{{data.price}}</td>
                          <td>{{data.users}}</td>
                          <td>{{data.suppliers}}</td>
                          <td>{{data.products}}</td>
                          <td>{{data.invoice}}</td>
                          <td>{{data.createdDate}}</td>
                          <td><span class="badge bg-success-light d-inline-flex align-items-center"><i
                          class="feather icon-check me-1"></i>{{data.status}}</span></td>
                          <td class="d-flex align-items-center">
                            <div class="dropdown dropdown-action">
                              <a href="javascript:void(0);" class=" btn-action-icon" data-bs-toggle="dropdown"
                                aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
                                <div class="dropdown-menu dropdown-menu-end">
                                  <ul class="dropdown-ul">
                                    <li>
                                      <a class="dropdown-item" href="javascript:void(0);"
                                        data-bs-toggle="modal" data-bs-target="#edit_package"><i
                                      class="feather icon-edit me-2"></i>Edit</a>
                                    </li>
                                    <li class="delete-alt">
                                      <a class="dropdown-item" href="javascript:void(0);"
                                        data-bs-toggle="modal" data-bs-target="#delete_modal"><i
                                      class="feather icon-trash-2 me-2"></i>Delete</a>
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
        <!-- /Page Wrapper -->

        <!-- Add Asset -->
        <div class="toggle-sidebar" [ngClass]="{ 'open-filter': toggleData === true }">
          <div class="sidebar-layout-filter">
            <div class="sidebar-header">
              <h5>Filter</h5>
              <a href="javascript:void(0);" class="sidebar-closes" (click)="openContent()"><i class="fa-regular fa-circle-xmark"></i></a>
            </div>
            <div class="sidebar-body">
              <form action="#" autocomplete="off">

                <!-- By Plane -->
                <div class="accordion" id="accordionMain3">
                  <div class="card-header-new" id="headingThree">
                    <h6 class="filter-title">
                      <a href="javascript:void(0);" class="w-100 collapsed" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        Plans
                        <span class="float-end"><i class="fa-solid fa-chevron-down"></i></span>
                      </a>
                    </h6>
                  </div>

                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample3">
                    <div class="card-body-chat">
                      <div id="checkBoxes2">
                        <div class="selectBox-cont">
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span> All Plans
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span> Advanced
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span> Basic
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span> Enterprise
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span>Premium
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span>Free
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /By Plane -->

                <!-- By Plane -->
                <div class="accordion" id="accordionMain4">
                  <div class="card-header-new" id="headingFour">
                    <h6 class="filter-title">
                      <a href="javascript:void(0);" class="w-100 collapsed" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        Plans Type
                        <span class="float-end"><i class="fa-solid fa-chevron-down"></i></span>
                      </a>
                    </h6>
                  </div>

                  <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample4">
                    <div class="card-body-chat">
                      <div id="checkBoxes3">
                        <div class="selectBox-cont">
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span> All Plan Type
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span> Monthly
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span> Weekly
                          </label>
                          <label class="custom_check w-100">
                            <input type="checkbox" name="bystatus">
                            <span class="checkmark"></span>Lifetime
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /By Plane -->

                <!-- Select Date -->
                <div class="accordion accordion-last" id="accordionMain2">
                  <div class="card-header-new" id="headingTwo">
                    <h6 class="filter-title">
                      <a href="javascript:void(0);" class="w-100 collapsed" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Created Date
                        <span class="float-end"><i class="fa-solid fa-chevron-down"></i></span>
                      </a>
                    </h6>
                  </div>

                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample2">
                    <div class="card-body-chat">
                      <div class="input-block mb-3">
                        <label class="form-control-label">From</label>
                        <div class="cal-icon">
                          <input type="email" class="form-control datetimepicker" bsDatepicker [bsConfig]="{ adaptivePosition: true }" placeholder="DD-MM-YYYY">
                        </div>
                      </div>
                      <div class="input-block mb-3">
                        <label class="form-control-label">To</label>
                        <div class="cal-icon">
                          <input type="email" class="form-control datetimepicker" bsDatepicker [bsConfig]="{ adaptivePosition: true }" placeholder="DD-MM-YYYY">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Select Date -->



                <div class="filter-buttons">
                  <button type="submit"
                    class="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary">
                    Apply
                  </button>
                  <button type="submit"
                    class="d-inline-flex align-items-center justify-content-center btn w-100 btn-secondary">
                    Reset
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
        <!--/Add Asset -->

        <!-- Add New Package Modal -->
        <div class="modal custom-modal fade p-20" id="add_newpackage" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
              <div class="modal-header border-0">
                <div class="form-header modal-header-title text-start mb-0">
                  <h4 class="mb-0">Add New</h4>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
              </div>
              <form action="#">
                <div class="modal-body">
                  <h5 class="form-title">Plan Image</h5>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="profile-picture">
                        <div class="upload-profile">
                          <div class="profile-img company-profile-img">
                            <img id="company-img" class="img-fluid me-0"
                              src="assets/img/companies/company-add-img.svg" alt="profile-img">
                            </div>
                            <div class="add-profile">
                              <h5>Upload a New Photo</h5>
                              <span>Profile-pic.jpg</span>
                            </div>
                          </div>
                          <div class="img-upload">
                            <label class="btn btn-upload">
                              Upload <input type="file">
                            </label>
                            <a class="btn btn-remove">Remove</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <h5 class="form-title mb-3">Plan Info</h5>
                      </div>
                      <div class="col-sm-12 col-md-6">

                        <div class="input-block mb-3">
                          <label>Plan Name</label>
                          <input type="text" class="form-control" placeholder="Enter Plan Name" value="">
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <div class="input-block mb-3">
                          <label>Plan Type</label>
                          <mat-select class="select custom-mat-select" placeholder="Monthly">
                            <mat-option value="Monthly">Monthly</mat-option>
                            <mat-option value="Yearly">Yearly</mat-option>
                            <mat-option value="free Trail">Free Trial</mat-option>
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <div class="input-block mb-3">
                          <label>Plan Position</label>
                          <mat-select class="select custom-mat-select" placeholder="1">
                            <mat-option value="1">1</mat-option>
                            <mat-option value="2">2</mat-option>
                            <mat-option value="3">3</mat-option>
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <div class="input-block mb-3">
                          <label>Plan Currency</label>
                          <mat-select class="select custom-mat-select" placeholder="USD">
                            <mat-option value="USD">USD</mat-option>
                            <mat-option value="$">$</mat-option>
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <div class="input-block mb-3">
                          <label class="d-flex justify-content-between">
                            <span>Price</span>
                            <span class="text-primary"><i class="fa-solid fa-circle-exclamation me-2"></i>Set 0
                          for free</span>
                        </label>
                        <input type="text" class="form-control" placeholder="Enter Package Price">
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                      <div class="input-block mb-3">
                        <label>Discount Type</label>
                        <mat-select class="select custom-mat-select" placeholder="Fixed">
                          <mat-option value="Fixed">Fixed</mat-option>
                          <mat-option value="Percentage">Percentage</mat-option>
                        </mat-select>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                      <div class="input-block mb-3">
                        <label>Discount</label>
                        <input type="text" class="form-control" placeholder="Enter Discount">
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                      <div class="input-block mb-3">
                        <label>Limitations Invoices</label>
                        <input type="number" class="form-control" placeholder="0">
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                      <div class="input-block mb-3">
                        <label>Max Customers</label>
                        <input type="number" class="form-control" placeholder="0">
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                      <div class="input-block mb-3">
                        <label>Product</label>
                        <input type="number" class="form-control" placeholder="0">
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                      <div class="input-block mb-3">
                        <label>Supplier</label>
                        <input type="number" class="form-control" placeholder="0">
                      </div>
                    </div>
                  </div>
                  <h6>Plan Modules</h6>
                  <div class="input-block mb-3">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Select All
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Invoices
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Payments
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Payment Summary
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked>Vendors
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Estimates
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Quotations
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Memberships
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked>Customers
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Recurring Invoices
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Delivery Challans
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Products
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked>Vendors
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Expenses
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Reports
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked> Inventory
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-3 col-sm-6">
                        <div class="checkboxes">
                          <label>
                            <input type="checkbox" name="checkbox" checked>Signature
                          </label>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <h6 class="mb-0">Access Trial</h6>
                    <div class="status-toggle">
                      <input id="access-trail" class="check" type="checkbox" checked="">
                      <label for="access-trail" class="checktoggle checkbox-bg">checkbox</label>
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-sm-12 col-md-8">
                      <div class="input-block mb-3">
                        <label>Trial Days</label>
                        <input type="number" class="form-control" placeholder="0">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="d-flex align-items-center mb-3">
                        <h6 class="mb-0">Is Recommended</h6>
                        <div class="status-toggle">
                          <input id="recommended" class="check" type="checkbox">
                          <label for="recommended" class="checktoggle checkbox-bg">checkbox</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-12">
                      <div class="input-block mb-3">
                        <label>Description</label>
                        <textarea rows="3" cols="5" class="form-control"
                        placeholder="Enter Description"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <h6 class="mb-0">Status</h6>
                    <div class="status-toggle">
                      <input id="status-2" class="check" type="checkbox">
                      <label for="status-2" class="checktoggle checkbox-bg">checkbox</label>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal" class="btn btn-back cancel-btn me-2">Cancel</button>
                  <button type="submit" data-bs-dismiss="modal" class="btn btn-primary paid-continue-btn">Save
                  Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /Add New Package Modal -->

        <!-- Edit Package Modal -->
        <div class="modal custom-modal custom-lg-modal fade p-20" id="edit_package" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content">
              <div class="modal-header border-0">
                <div class="form-header modal-header-title text-start mb-0">
                  <h4 class="mb-0">Edit Package</h4>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
              </div>
              <form action="#">
                <div class="modal-body">
                  <h5 class="form-title">Plan Image</h5>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="profile-picture">
                        <div class="upload-profile">
                          <div class="profile-img company-profile-img">
                            <img id="company-img-2" class="img-fluid me-0"
                              src="assets/img/icons/price-02.svg" alt="profile-img">
                            </div>
                            <div class="add-profile">
                              <h5>Upload a New Photo</h5>
                              <span>Profile-pic.jpg</span>
                            </div>
                          </div>
                          <div class="img-upload">
                            <label class="btn btn-upload">
                              Upload <input type="file">
                            </label>
                            <a class="btn btn-remove">Remove</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <h5 class="form-title mb-3">Plan Info</h5>
                      </div>
                      <div class="col-sm-12 col-md-6">

                        <div class="input-block mb-3">
                          <label>Plan Name</label>
                          <input type="text" class="form-control" placeholder="Enter Plan Name"
                            value="Enterprise">
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                          <div class="input-block mb-3">
                            <label>Plan Type</label>
                            <mat-select class="select custom-mat-select" placeholder="Monthly">
                              <mat-option value="Monthly">Monthly</mat-option>
                              <mat-option value="Yearly">Yearly</mat-option>
                              <mat-option value="free Trail">Free Trial</mat-option>
                            </mat-select>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                          <div class="input-block mb-3">
                            <label>Plan Position</label>
                            <mat-select class="select custom-mat-select" placeholder="1">
                              <mat-option value="1">1</mat-option>
                              <mat-option value="2">2</mat-option>
                              <mat-option value="3">3</mat-option>
                            </mat-select>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                          <div class="input-block mb-3">
                            <label>Plan Currency</label>
                            <mat-select class="select custom-mat-select" placeholder="USD">
                              <mat-option value="USD">USD</mat-option>
                              <mat-option value="$">$</mat-option>
                            </mat-select>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                          <div class="input-block mb-3">
                            <label class="d-flex justify-content-between">
                              <span>Price</span>
                              <span class="text-primary"><i class="fa-solid fa-circle-exclamation me-2"></i>Set 0
                            for free</span>
                          </label>
                          <input type="text" class="form-control" placeholder="Enter Package Price" value="4545">
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-3">
                        <div class="input-block mb-3">
                          <label>Discount Type</label>
                          <mat-select class="select custom-mat-select" placeholder="Fixed">
                            <mat-option value="Fixed">Fixed</mat-option>
                            <mat-option value="Percentage">Percentage</mat-option>
                          </mat-select>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-3">
                        <div class="input-block mb-3">
                          <label>Discount</label>
                          <input type="text" class="form-control" placeholder="Enter Discount" value="5%">
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="input-block mb-3">
                          <label>Limitations Invoices</label>
                          <input type="number" class="form-control" placeholder="0" value="50">
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="input-block mb-3">
                          <label>Max Customers</label>
                          <input type="number" class="form-control" placeholder="0" value="250">
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="input-block mb-3">
                          <label>Product</label>
                          <input type="number" class="form-control" placeholder="0" value="110">
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="input-block mb-3">
                          <label>Supplier</label>
                          <input type="number" class="form-control" placeholder="0" value="14">
                        </div>
                      </div>
                    </div>
                    <h6>Plan Modules</h6>
                    <div class="input-block mb-3">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Select All
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Invoices
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Payments
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Payment Summary
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked>Vendors
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Estimates
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Quotations
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Memberships
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked>Customers
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Recurring Invoices
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Delivery Challans
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Products
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked>Vendors
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Expenses
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Reports
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked> Inventory
                            </label>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="checkboxes">
                            <label>
                              <input type="checkbox" name="checkbox" checked>Signature
                            </label>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <h6 class="mb-0">Access Trial</h6>
                      <div class="status-toggle">
                        <input id="access-trail-2" class="check" type="checkbox" checked="">
                        <label for="access-trail-2" class="checktoggle checkbox-bg">checkbox</label>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-sm-12 col-md-8">
                        <div class="input-block mb-3">
                          <label>Trial Days</label>
                          <input type="number" class="form-control" placeholder="0">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-center mb-3">
                          <h6 class="mb-0">Is Recommended</h6>
                          <div class="status-toggle">
                            <input id="recommended-2" class="check" type="checkbox">
                            <label for="recommended-2" class="checktoggle checkbox-bg">checkbox</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <div class="input-block mb-3">
                          <label>Description</label>
                          <textarea rows="3" cols="5" class="form-control"
                          placeholder="Enter Description"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <h6 class="mb-0">Status</h6>
                      <div class="status-toggle">
                        <input id="status" class="check" type="checkbox">
                        <label for="status" class="checktoggle checkbox-bg">checkbox</label>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal" class="btn btn-back cancel-btn me-2">Cancel</button>
                    <button type="submit" data-bs-dismiss="modal" class="btn btn-primary paid-continue-btn">Save
                    Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- /Edit Package Modal -->

          <!-- Delete Items Modal -->
          <div class="modal custom-modal fade modal-delete" id="delete_modal" role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-md">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="form-header">
                    <div class="delete-modal-icon">
                      <span><i class="feather icon-check-circle"></i></span>
                    </div>
                    <h3>Are You Sure?</h3>
                    <p>You want delete plan</p>
                  </div>
                  <div class="modal-btn delete-action">
                    <div class="modal-footer justify-content-center p-0">
                      <button type="submit" data-bs-dismiss="modal"
                      class="btn btn-primary paid-continue-btn me-2">Yes, Delete</button>
                      <button type="button" data-bs-dismiss="modal" class="btn btn-back cancel-btn">No,
                      Cancel</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlansListComponent, { className: "PlansListComponent", filePath: "src/app/features/super-admin/plans-list/plans-list.component.ts", lineNumber: 23 });
})();
export {
  PlansListComponent
};
//# sourceMappingURL=chunk-KJQQILKV.js.map
