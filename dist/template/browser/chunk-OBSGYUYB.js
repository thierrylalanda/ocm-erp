import {
  PaginationService
} from "./chunk-OQ3NIM27.js";
import {
  MatTableDataSource
} from "./chunk-L6DWDL26.js";
import "./chunk-2GQT47Z7.js";
import "./chunk-HQMPBCJK.js";
import "./chunk-Y23EXZTF.js";
import "./chunk-WLTG2KP6.js";
import "./chunk-MDKDGAXP.js";
import "./chunk-YWH7SLE3.js";
import "./chunk-EXNS3HGN.js";
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
import "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/invantory-sales/products-service/units/units.component.ts
var UnitsComponent = class _UnitsComponent {
  data;
  pagination;
  router;
  units = [];
  routes = routes;
  Toggledata = false;
  isCollapsed = false;
  // pagination variables
  pageSize = 10;
  serialNumberArray = [];
  totalData = 0;
  dataSource;
  searchDataValue = "";
  //** / pagination variables
  constructor(data, pagination, router) {
    this.data = data;
    this.pagination = pagination;
    this.router = router;
    this.pagination.tablePageSize.subscribe((res) => {
      if (this.router.url == this.routes.units) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  getTableData(pageOption) {
    this.data.getUnits().subscribe((apiRes) => {
      this.units = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.units.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.units);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.units,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  sortData(sort) {
    const data = this.units.slice();
    if (!sort.active || sort.direction === "") {
      this.units = data;
    } else {
      this.units = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
      });
    }
  }
  open() {
    this.Toggledata = !this.Toggledata;
  }
  users = [
    { name: "Pricilla Maureen", checked: false },
    { name: "Randall Hollis", checked: false }
  ];
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  static \u0275fac = function UnitsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnitsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnitsComponent, selectors: [["app-units"]], decls: 174, vars: 0, consts: [[1, "content-two"], [1, "d-flex", "d-block", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "mb-3"], [1, "d-flex", "my-xl-auto", "right-content", "align-items-center", "flex-wrap", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_modal", 1, "btn", "btn-primary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle5", "me-1"], [1, "row"], [1, "col-md-3"], [1, "input-group", "mb-3"], [1, "input-group-text", "bg-white", "border-end-0"], [1, "isax", "isax-search-normal", "fs-12"], ["type", "text", "placeholder", "Search", 1, "form-control", "border-start-0", "ps-0", "bg-white"], [1, "table-responsive", "border", "border-bottom-0", "rounded"], [1, "table", "table-nowrap", "m-0"], [1, "table-light"], [1, "no-sort"], [1, "fs-14", "fw-medium", "mb-0"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "checked", "", 1, "form-check-input"], [1, "action-item"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown"], [1, "fa-solid", "fa-ellipsis-vertical"], [1, "dropdown-menu"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-edit", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "isax", "isax-trash", "me-2"]], template: function UnitsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h6");
      \u0275\u0275text(4, "Units");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 2)(6, "div")(7, "a", 3);
      \u0275\u0275domElement(8, "i", 4);
      \u0275\u0275text(9, "New Unit");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "span", 8);
      \u0275\u0275domElement(14, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(15, "input", 10);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "div", 11)(17, "table", 12)(18, "thead", 13)(19, "tr")(20, "th");
      \u0275\u0275text(21, "Unit Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "th", 14);
      \u0275\u0275text(23, "Short Name");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(24, "th", 14)(25, "th", 14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "tbody")(27, "tr")(28, "td")(29, "h6", 15);
      \u0275\u0275text(30, "Kilogram");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "td");
      \u0275\u0275text(32, "kg");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "td")(34, "div", 16);
      \u0275\u0275domElement(35, "input", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(36, "td", 18)(37, "a", 19);
      \u0275\u0275domElement(38, "i", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "ul", 21)(40, "li")(41, "a", 22);
      \u0275\u0275domElement(42, "i", 23);
      \u0275\u0275text(43, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(44, "li")(45, "a", 24);
      \u0275\u0275domElement(46, "i", 25);
      \u0275\u0275text(47, "Delete");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(48, "tr")(49, "td")(50, "h6", 15);
      \u0275\u0275text(51, "Gram");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(52, "td");
      \u0275\u0275text(53, "g");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(54, "td")(55, "div", 16);
      \u0275\u0275domElement(56, "input", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(57, "td", 18)(58, "a", 19);
      \u0275\u0275domElement(59, "i", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(60, "ul", 21)(61, "li")(62, "a", 22);
      \u0275\u0275domElement(63, "i", 23);
      \u0275\u0275text(64, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(65, "li")(66, "a", 24);
      \u0275\u0275domElement(67, "i", 25);
      \u0275\u0275text(68, "Delete");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(69, "tr")(70, "td")(71, "h6", 15);
      \u0275\u0275text(72, "Liter");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(73, "td");
      \u0275\u0275text(74, "l");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "td")(76, "div", 16);
      \u0275\u0275domElement(77, "input", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(78, "td", 18)(79, "a", 19);
      \u0275\u0275domElement(80, "i", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "ul", 21)(82, "li")(83, "a", 22);
      \u0275\u0275domElement(84, "i", 23);
      \u0275\u0275text(85, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(86, "li")(87, "a", 24);
      \u0275\u0275domElement(88, "i", 25);
      \u0275\u0275text(89, "Delete");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(90, "tr")(91, "td")(92, "h6", 15);
      \u0275\u0275text(93, "Millimetre");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(94, "td");
      \u0275\u0275text(95, "ml");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(96, "td")(97, "div", 16);
      \u0275\u0275domElement(98, "input", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(99, "td", 18)(100, "a", 19);
      \u0275\u0275domElement(101, "i", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(102, "ul", 21)(103, "li")(104, "a", 22);
      \u0275\u0275domElement(105, "i", 23);
      \u0275\u0275text(106, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(107, "li")(108, "a", 24);
      \u0275\u0275domElement(109, "i", 25);
      \u0275\u0275text(110, "Delete");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(111, "tr")(112, "td")(113, "h6", 15);
      \u0275\u0275text(114, "Box");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(115, "td");
      \u0275\u0275text(116, "bx");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(117, "td")(118, "div", 16);
      \u0275\u0275domElement(119, "input", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(120, "td", 18)(121, "a", 19);
      \u0275\u0275domElement(122, "i", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(123, "ul", 21)(124, "li")(125, "a", 22);
      \u0275\u0275domElement(126, "i", 23);
      \u0275\u0275text(127, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(128, "li")(129, "a", 24);
      \u0275\u0275domElement(130, "i", 25);
      \u0275\u0275text(131, "Delete");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(132, "tr")(133, "td")(134, "h6", 15);
      \u0275\u0275text(135, "Pack");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(136, "td");
      \u0275\u0275text(137, "pk");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(138, "td")(139, "div", 16);
      \u0275\u0275domElement(140, "input", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(141, "td", 18)(142, "a", 19);
      \u0275\u0275domElement(143, "i", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(144, "ul", 21)(145, "li")(146, "a", 22);
      \u0275\u0275domElement(147, "i", 23);
      \u0275\u0275text(148, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(149, "li")(150, "a", 24);
      \u0275\u0275domElement(151, "i", 25);
      \u0275\u0275text(152, "Delete");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(153, "tr")(154, "td")(155, "h6", 15);
      \u0275\u0275text(156, "Piece");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(157, "td");
      \u0275\u0275text(158, "pc");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(159, "td")(160, "div", 16);
      \u0275\u0275domElement(161, "input", 17);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(162, "td", 18)(163, "a", 19);
      \u0275\u0275domElement(164, "i", 20);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(165, "ul", 21)(166, "li")(167, "a", 22);
      \u0275\u0275domElement(168, "i", 23);
      \u0275\u0275text(169, "Edit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(170, "li")(171, "a", 24);
      \u0275\u0275domElement(172, "i", 25);
      \u0275\u0275text(173, "Delete");
      \u0275\u0275domElementEnd()()()()()()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitsComponent, [{
    type: Component,
    args: [{ selector: "app-units", imports: [], template: '			<!-- start container -->\n      <div class="content-two">\n\n        <!-- Start Breadcrumb -->\n        <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n            <div>\n                <h6>Units</h6>\n            </div>\n            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n                <div>\n                    <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal"><i class="isax isax-add-circle5 me-1"></i>New Unit</a>\n                </div>\n            </div>\n        </div>\n        <!-- End Breadcrumb -->\n\n        <div class="row">\n            <div class="col-md-3">\n                <div class="input-group mb-3">\n                    <span class="input-group-text bg-white border-end-0">\n        <i class="isax isax-search-normal fs-12"></i>\n      </span>\n                    <input type="text" class="form-control border-start-0 ps-0 bg-white" placeholder="Search">\n                </div>\n            </div> <!-- end col -->\n        </div> <!-- end row -->\n\n        <div class="table-responsive border border-bottom-0 rounded">\n            <table class="table table-nowrap m-0">\n                <thead class="table-light">\n                    <tr>\n                        <th>Unit Name</th>\n                        <th class="no-sort">Short Name</th>\n                        <th class="no-sort"></th>\n                        <th class="no-sort"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Kilogram</h6></td>\n                        <td>kg</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Gram</h6></td>\n                        <td>g</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Liter</h6></td>\n                        <td>l</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Millimetre</h6></td>\n                        <td>ml</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Box</h6></td>\n                        <td>bx</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Pack</h6></td>\n                        <td>pk</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Piece</h6></td>\n                        <td>pc</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                </tbody>\n            </table> <!-- end table -->\n        </div>\n\n    </div>\n<!-- end container -->' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnitsComponent, { className: "UnitsComponent", filePath: "src/app/features/invantory-sales/products-service/units/units.component.ts", lineNumber: 19 });
})();
export {
  UnitsComponent
};
//# sourceMappingURL=chunk-OBSGYUYB.js.map
