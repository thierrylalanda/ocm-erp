import {
  MatSliderModule
} from "./chunk-Z5WPXIQX.js";
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
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.ts
var _c0 = () => ({ standalone: true });
function DeleteAccountRequestComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 42);
    \u0275\u0275element(3, "img", 43);
    \u0275\u0275elementStart(4, "div")(5, "h6", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "a", 45);
    \u0275\u0275element(11, "i", 46);
    \u0275\u0275text(12, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 47);
    \u0275\u0275element(14, "i", 48);
    \u0275\u0275text(15, " Confirm ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/users/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.deleteRequestDate);
  }
}
function DeleteAccountRequestComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2, "No matching records found");
    \u0275\u0275elementEnd()();
  }
}
function DeleteAccountRequestComponent_app_custom_pagination_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-custom-pagination");
  }
}
var DeleteAccountRequestComponent = class _DeleteAccountRequestComponent {
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
    this.data.getdeleteaccount().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.deleteAccountRequest) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getdeleteaccount().subscribe((apiRes) => {
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
  static \u0275fac = function DeleteAccountRequestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeleteAccountRequestComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteAccountRequestComponent, selectors: [["app-delete-account-request"]], decls: 90, vars: 5, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "table-search", "d-flex", "align-items-center", "mb-0"], [1, "search-input"], ["href", "javascript:void(0);", 1, "btn-searchset"], [1, "isax", "isax-search-normal", "fs-12"], ["id", "DataTables_Table_0_filter", 1, "dataTables_filter"], ["type", "search", "type", "search", "placeholder", "Search", "aria-controls", "DataTables_Table_0", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-sort", "me-1"], [1, "fw-normal", "ms-1"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "align-items-center", "gap-2", "flex-wrap", "filter-info", "mt-3"], [1, "fs-13", "fw-semibold"], [1, "tag", "bg-light", "border", "rounded-1", "fs-12", "text-dark", "badge"], [1, "num-count", "d-inline-flex", "align-items-center", "justify-content-center", "bg-success", "fs-10", "me-1"], [1, "ms-1", "tag-close"], [1, "fa-solid", "fa-x", "fs-10"], ["href", "javascript:void(0);", 1, "link-danger", "fw-medium", "text-decoration-underline", "ms-md-1"], [1, "table-responsive"], ["matSort", "", 1, "table", "table-nowrap", "dataTable", "datatable", 3, "matSortChange"], [1, "thead-light"], ["mat-sort-header", "user"], ["mat-sort-header", "delete"], [1, "no-sort"], [4, "ngIf"], ["id", "confirm_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "assets/img/icons/delete.svg", "alt", "img"], [1, "mb-1"], [1, "d-flex", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-outline-white", "me-3"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["id", "cancel_modal", 1, "modal", "fade"], ["src", "assets/img/icons/cancel.svg", "alt", "img"], [1, "d-flex", "align-items-center"], ["alt", "img", 1, "avatar", "avatar-sm", "rounded-circle", "me-2", "flex-shrink-0", 3, "src"], [1, "fs-14", "fw-medium", "mb-0"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#cancel_modal", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center", "me-2"], [1, "isax", "isax-close-circle", "me-1"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#confirm_modal", 1, "btn", "btn-outline-white", "d-inline-flex", "align-items-center"], [1, "isax", "isax-tick-circle", "me-1"], ["colspan", "12", 1, "text-center", "text-dark"]], template: function DeleteAccountRequestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Delete Account Request");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "a", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 9)(13, "label")(14, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function DeleteAccountRequestComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DeleteAccountRequestComponent_Template_input_ngModelChange_14_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(15, "div", 4)(16, "div", 11)(17, "a", 12);
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275text(19, "Sort By : ");
      \u0275\u0275elementStart(20, "span", 14);
      \u0275\u0275text(21, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "ul", 15)(23, "li")(24, "a", 16);
      \u0275\u0275text(25, "Latest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 16);
      \u0275\u0275text(28, "Oldest");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(29, "div", 17)(30, "h6", 18);
      \u0275\u0275text(31, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 19)(33, "span", 20);
      \u0275\u0275text(34, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, "Users Selected");
      \u0275\u0275elementStart(36, "span", 21);
      \u0275\u0275element(37, "i", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "span", 19)(39, "span", 20);
      \u0275\u0275text(40, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, "Status Selected");
      \u0275\u0275elementStart(42, "span", 21);
      \u0275\u0275element(43, "i", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "a", 23);
      \u0275\u0275text(45, "Clear All");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 24)(47, "table", 25);
      \u0275\u0275listener("matSortChange", function DeleteAccountRequestComponent_Template_table_matSortChange_47_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(48, "thead", 26)(49, "tr")(50, "th", 27);
      \u0275\u0275text(51, "User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 28);
      \u0275\u0275text(53, "Delete Request Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "th", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "tbody");
      \u0275\u0275repeaterCreate(56, DeleteAccountRequestComponent_For_57_Template, 16, 4, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(58, DeleteAccountRequestComponent_Conditional_58_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(59, DeleteAccountRequestComponent_app_custom_pagination_59_Template, 1, 0, "app-custom-pagination", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 31)(61, "div", 32)(62, "div", 33)(63, "div", 34)(64, "div", 2);
      \u0275\u0275element(65, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h6", 36);
      \u0275\u0275text(67, "Confirm Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 2);
      \u0275\u0275text(69, "Are you sure, you want to confirm request?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 37)(71, "a", 38);
      \u0275\u0275text(72, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 39);
      \u0275\u0275text(74, "Yes, Confirm");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(75, "div", 40)(76, "div", 32)(77, "div", 33)(78, "div", 34)(79, "div", 2);
      \u0275\u0275element(80, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "h6", 36);
      \u0275\u0275text(82, "Cancel Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p", 2);
      \u0275\u0275text(84, "Are you sure, you want to cancel request?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 37)(86, "a", 38);
      \u0275\u0275text(87, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "a", 39);
      \u0275\u0275text(89, "Yes, Cancel");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(42);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tableData.length === 0 ? 58 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.row);
    }
  }, dependencies: [MatSliderModule, CustomPaginationComponent, CommonModule, NgIf, MatSortModule, MatSort, MatSortHeader, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteAccountRequestComponent, [{
    type: Component,
    args: [{ selector: "app-delete-account-request", imports: [MatSliderModule, CustomPaginationComponent, CommonModule, MatSortModule, FormsModule], template: '<!-- Start Content -->\n<div class="content-two">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Delete Account Request</h6>\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- Table Search Start -->\n    <div class="mb-3">\n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="table-search d-flex align-items-center mb-0">\n                    <div class="search-input">\n                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                          <label> \n                          <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                        </label>\n                      </div>\n                     </div>\n    \n                </div>\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                        <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu-end">\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <!-- Filter Info -->\n        <div class="align-items-center gap-2 flex-wrap filter-info mt-3">\n            <h6 class="fs-13 fw-semibold">Filters</h6>\n            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Users Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Status Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>\n        </div>\n        <!-- /Filter Info -->\n    </div>\n    <!-- Table Search End -->\n\n    <!-- Table List Start -->\n    <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n            <thead class="thead-light">\n                <tr>\n                    <th mat-sort-header="user">User</th>\n                    <th mat-sort-header="delete">Delete Request Date</th>\n                    <th class="no-sort"></th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <img src="assets/img/users/{{data.img}}" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0" alt="img">\n                            <div>\n                                <h6 class="fs-14 fw-medium mb-0">{{data.user}}</h6>\n                            </div>\n                        </div>\n                    </td>\n                    <td>{{data.deleteRequestDate}}</td>\n                    <td>\n                        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-2" data-bs-toggle="modal" data-bs-target="#cancel_modal">\n                            <i class="isax isax-close-circle me-1"></i> Cancel\n                        </a>\n                        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#confirm_modal">\n                            <i class="isax isax-tick-circle me-1"></i> Confirm\n                        </a>\n                    </td>\n                </tr>\n            } @if(tableData.length === 0){\n                <tr>\n                  <td colspan="12" class="text-center text-dark">No matching records found</td>\n                </tr>\n              }\n            </tbody>\n        </table>\n    </div>\n    <!-- /Table List End -->\n     <app-custom-pagination *ngIf="row"></app-custom-pagination>\n\n</div>\n<!-- End Content -->\n\n\n\n        <!-- Confirm Modal Start -->\n        <div class="modal fade" id="confirm_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Confirm Request</h6>\n                        <p class="mb-3">Are you sure, you want to confirm request?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Confirm</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Confirm Modal End -->\n\n        <!-- Cancel Modal Start -->\n        <div class="modal fade" id="cancel_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/cancel.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Cancel Request</h6>\n                        <p class="mb-3">Are you sure, you want to cancel request?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Cancel Modal End -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteAccountRequestComponent, { className: "DeleteAccountRequestComponent", filePath: "src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.ts", lineNumber: 19 });
})();
export {
  DeleteAccountRequestComponent
};
//# sourceMappingURL=chunk-4RSSXZ4J.js.map
