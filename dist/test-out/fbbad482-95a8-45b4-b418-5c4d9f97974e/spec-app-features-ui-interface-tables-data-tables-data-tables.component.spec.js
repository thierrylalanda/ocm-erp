import {
  MatTableDataSource,
  init_table
} from "./chunk-R4MVIOZR.js";
import {
  MatSortModule,
  init_sort
} from "./chunk-7WAXRMEI.js";
import "./chunk-N2Q3HONL.js";
import "./chunk-Y46UO4F7.js";
import "./chunk-WYJ2IQUD.js";
import "./chunk-BDO5G4JQ.js";
import "./chunk-BAYPUVG5.js";
import "./chunk-V5QKIDZC.js";
import {
  CustomPaginationComponent,
  init_custom_pagination_component
} from "./chunk-LDAP2XKN.js";
import {
  PaginationService,
  init_pagination_service
} from "./chunk-MK4VFZLN.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import "./chunk-2RBILSOV.js";
import {
  DataService,
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import {
  Router,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/tables/data-tables/data-tables.component.html
var data_tables_component_default;
var init_data_tables_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/tables/data-tables/data-tables.component.html"() {
    data_tables_component_default = ' <!-- Page Header -->\n <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Data Tables</h4>\n  </div>\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>\n          <li class="breadcrumb-item active">Data Tables</li>\n      </ol>\n  </div>\n</div>\n<!-- End Page Header -->\n\n<!-- Page Header -->\n<div class="page-header">\n  <div class="content-page-header">\n    <h5>Default Datatable</h5>\n  </div>\n</div>\n<!-- /Page Header -->\n\n<div class="row">\n  <div class="col-sm-12">\n    <div class="card">\n      <div class="card-header card-buttons">\n        <h4 class="card-title">Default Datatable</h4>\n        <p class="card-text">\n          This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code>\n          class to initialize datatables.\n        </p>\n      </div>\n      <div class="card-body">\n        <div class="table-responsive">\n          <div class="table-scroll">\n            <table matSort (matSortChange)="sortData($event)" class="datatable table table-stripped">\n              <thead>\n                <tr>\n                  <th mat-sort-header="name">Name</th>\n                  <th mat-sort-header="position">Position</th>\n                  <th mat-sort-header="office">Office</th>\n                  <th mat-sort-header="age">Age</th>\n                  <th mat-sort-header="startDate">Start date</th>\n                  <th mat-sort-header="salary">Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (data of tableData; track data) {\n                  <tr>\n                    <td>{{data.name}}</td>\n                    <td>{{data.position}}</td>\n                    <td>{{data.office}}</td>\n                    <td>{{data.age}}</td>\n                    <td>{{data.startDate}}</td>\n                    <td>{{data.salary}}</td>\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <app-custom-pagination></app-custom-pagination>\n      </div>\n    </div>\n  </div>\n</div>';
  }
});

// angular:jit:style:src/app/features/ui-interface/tables/data-tables/data-tables.component.scss
var data_tables_component_default2;
var init_data_tables_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/tables/data-tables/data-tables.component.scss"() {
    data_tables_component_default2 = "/* src/app/features/ui-interface/tables/data-tables/data-tables.component.scss */\n/*# sourceMappingURL=data-tables.component.css.map */\n";
  }
});

// src/app/features/ui-interface/tables/data-tables/data-tables.component.ts
var DataTablesComponent;
var init_data_tables_component3 = __esm({
  "src/app/features/ui-interface/tables/data-tables/data-tables.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_data_tables_component();
    init_data_tables_component2();
    init_core();
    init_sort();
    init_core_index();
    init_router();
    init_table();
    init_common();
    init_pagination_service();
    init_custom_pagination_component();
    DataTablesComponent = class DataTablesComponent2 {
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
      static ctorParameters = () => [
        { type: DataService },
        { type: PaginationService },
        { type: Router }
      ];
    };
    DataTablesComponent = __decorate([
      Component({
        selector: "app-data-tables",
        template: data_tables_component_default,
        imports: [CommonModule, CustomPaginationComponent, MatSortModule],
        styles: [data_tables_component_default2]
      })
    ], DataTablesComponent);
  }
});

// src/app/features/ui-interface/tables/data-tables/data-tables.component.spec.ts
var require_data_tables_component_spec = __commonJS({
  "src/app/features/ui-interface/tables/data-tables/data-tables.component.spec.ts"(exports) {
    init_testing();
    init_data_tables_component3();
    describe("DataTablesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [DataTablesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DataTablesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_data_tables_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-tables-data-tables-data-tables.component.spec.js.map
