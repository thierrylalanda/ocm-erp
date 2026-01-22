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
import "./chunk-NAWYXTZ5.js";
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
  CommonModule
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
  ɵɵlistener,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/ui-interface/tables/data-tables/data-tables.component.ts
function DataTablesComponent_For_49_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.office);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.age);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.salary);
  }
}
var DataTablesComponent = class _DataTablesComponent {
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
      if (this.router.url == this.routes.dataTables) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
  getTableData(pageOption) {
    this.data.getDataTables().subscribe((apiRes) => {
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
  static \u0275fac = function DataTablesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataTablesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataTablesComponent, selectors: [["app-data-tables"]], decls: 51, vars: 0, consts: [[1, "d-flex", "align-items-sm-center", "flex-sm-row", "flex-column", "gap-2", "pb-3"], [1, "flex-grow-1"], [1, "fs-18", "fw-semibold", "mb-0"], [1, "text-end"], [1, "breadcrumb", "m-0", "py-0"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"], [1, "page-header"], [1, "content-page-header"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header", "card-buttons"], [1, "card-title"], [1, "card-text"], [1, "card-body"], [1, "table-responsive"], [1, "table-scroll"], ["matSort", "", 1, "datatable", "table", "table-stripped", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "position"], ["mat-sort-header", "office"], ["mat-sort-header", "age"], ["mat-sort-header", "startDate"], ["mat-sort-header", "salary"]], template: function DataTablesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
      \u0275\u0275text(3, "Data Tables");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "ol", 4)(6, "li", 5)(7, "a", 6);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li", 5)(10, "a", 6);
      \u0275\u0275text(11, "Forms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 7);
      \u0275\u0275text(13, "Data Tables");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "h5");
      \u0275\u0275text(17, "Default Datatable");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "h4", 14);
      \u0275\u0275text(23, "Default Datatable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 15);
      \u0275\u0275text(25, " This is the most basic example of the datatables with zero configuration. Use the ");
      \u0275\u0275elementStart(26, "code");
      \u0275\u0275text(27, ".datatable");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " class to initialize datatables. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 16)(30, "div", 17)(31, "div", 18)(32, "table", 19);
      \u0275\u0275listener("matSortChange", function DataTablesComponent_Template_table_matSortChange_32_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(33, "thead")(34, "tr")(35, "th", 20);
      \u0275\u0275text(36, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 21);
      \u0275\u0275text(38, "Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 22);
      \u0275\u0275text(40, "Office");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 23);
      \u0275\u0275text(42, "Age");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 24);
      \u0275\u0275text(44, "Start date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th", 25);
      \u0275\u0275text(46, "Salary");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "tbody");
      \u0275\u0275repeaterCreate(48, DataTablesComponent_For_49_Template, 13, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(50, "app-custom-pagination");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(48);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CommonModule, CustomPaginationComponent, MatSortModule, MatSort, MatSortHeader], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataTablesComponent, [{
    type: Component,
    args: [{ selector: "app-data-tables", imports: [CommonModule, CustomPaginationComponent, MatSortModule], template: ' <!-- Page Header -->\n <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Data Tables</h4>\n  </div>\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n          <li class="breadcrumb-item active">Data Tables</li>\n      </ol>\n  </div>\n</div>\n<!-- End Page Header -->\n\n<!-- Page Header -->\n<div class="page-header">\n  <div class="content-page-header">\n    <h5>Default Datatable</h5>\n  </div>\n</div>\n<!-- /Page Header -->\n\n<div class="row">\n  <div class="col-sm-12">\n    <div class="card">\n      <div class="card-header card-buttons">\n        <h4 class="card-title">Default Datatable</h4>\n        <p class="card-text">\n          This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code>\n          class to initialize datatables.\n        </p>\n      </div>\n      <div class="card-body">\n        <div class="table-responsive">\n          <div class="table-scroll">\n            <table matSort (matSortChange)="sortData($event)" class="datatable table table-stripped">\n              <thead>\n                <tr>\n                  <th mat-sort-header="name">Name</th>\n                  <th mat-sort-header="position">Position</th>\n                  <th mat-sort-header="office">Office</th>\n                  <th mat-sort-header="age">Age</th>\n                  <th mat-sort-header="startDate">Start date</th>\n                  <th mat-sort-header="salary">Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (data of tableData; track data) {\n                  <tr>\n                    <td>{{data.name}}</td>\n                    <td>{{data.position}}</td>\n                    <td>{{data.office}}</td>\n                    <td>{{data.age}}</td>\n                    <td>{{data.startDate}}</td>\n                    <td>{{data.salary}}</td>\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <app-custom-pagination></app-custom-pagination>\n      </div>\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: DataService }, { type: PaginationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataTablesComponent, { className: "DataTablesComponent", filePath: "src/app/features/ui-interface/tables/data-tables/data-tables.component.ts", lineNumber: 18 });
})();
export {
  DataTablesComponent
};
//# sourceMappingURL=chunk-ZMK7I6FF.js.map
