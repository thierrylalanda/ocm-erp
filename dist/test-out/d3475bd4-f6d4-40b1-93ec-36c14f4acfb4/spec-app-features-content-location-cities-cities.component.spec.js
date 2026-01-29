import {
  NgxEditorModule,
  init_ngx_editor
} from "./chunk-BWQRL5BR.js";
import {
  MatSelectModule,
  init_select
} from "./chunk-PJP4EZYQ.js";
import "./chunk-ZLTBFUHR.js";
import {
  MatTableDataSource,
  init_table
} from "./chunk-R4MVIOZR.js";
import {
  MatSortModule,
  init_sort
} from "./chunk-7WAXRMEI.js";
import "./chunk-N2Q3HONL.js";
import "./chunk-ZQVU7KV2.js";
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
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import {
  FormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  DataService,
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
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

// angular:jit:template:src/app/features/content/location/cities/cities.component.html
var cities_component_default;
var init_cities_component = __esm({
  "angular:jit:template:src/app/features/content/location/cities/cities.component.html"() {
    cities_component_default = '			<!-- Start Content -->\n            <div class="content-two">\n\n                <!-- Page Header -->\n                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n                    <div>\n                        <h6>Cities</h6>\n                    </div>\n                    <div class="d-flex">\n                        <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">\n                            <i class="isax isax-add-circle5 me-1"></i>New City\n                        </a>\n                    </div>\n                </div>\n                <!-- End Page Header -->\n\n                <!-- Table Search Start -->\n                <div class="mb-3">\n                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="table-search d-flex align-items-center mb-0">\n                                <div class="search-input">\n                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                                      <label> \n                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                                    </label>\n                                  </div>\n                                 </div>\n                            </div>\n                        </div>\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="dropdown">\n                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                    <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                                </a>\n                                <ul class="dropdown-menu  dropdown-menu-end">\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                                    </li>\n                                    <li>\n                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <!-- Table Search End -->\n\n                <!-- Table List Start -->\n                <div class="table-responsive">\n                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n                        <thead class="thead-light">\n                            <tr>\n                                <th class="no-sort">\n                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                                    </div>\n                                </th>\n                                <th class="no-sort">Country</th>\n                                <th class="no-sort">State</th>\n                                <th class="no-sort">City</th>\n                                <th class="no-sort"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            @for (data of tableData;track data){\n                            <tr>\n                                <td class="sorting_1">\n                                    <div class="form-check form-check-md" >\n                                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-xs me-2 flex-shrink-0">\n                                            <img src="assets/img/flags/{{data.img}}" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.country}}</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>{{data.state}}</td>\n                                <td>{{data.city}}</td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="isax isax-more"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        } @if(tableData.length === 0){\n                            <tr>\n                              <td colspan="12" class="text-center text-dark">No matching records found</td>\n                            </tr>\n                          }\n                        </tbody>\n                    </table>\n                </div>\n                <!-- /Table List End -->\n                <app-custom-pagination *ngIf="row"/>\n            </div>\n			<!-- End Content -->\n\n\n                    <!-- Add Modal Start -->\n        <div id="add_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Add New City</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Country Name<span class="text-danger ms-1">*</span></label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">United States</mat-option>\n                                        <mat-option value="1">Canada</mat-option>\n                                        <mat-option value="1">Germany</mat-option>\n                                        <mat-option value="1">United Kingdom</mat-option>\n                                        <mat-option value="1">France</mat-option>\n                                        <mat-option value="1">India</mat-option>\n                                        <mat-option value="1">Italy</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">State Name<span class="text-danger ms-1">*</span></label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">Select</mat-option>\n                                        <mat-option value="1">California</mat-option>\n                                        <mat-option value="1">England</mat-option>\n                                        <mat-option value="1">Le-de-France</mat-option>\n                                        <mat-option value="1">Buenos Aires</mat-option>\n                                        <mat-option value="1">Maharashtra</mat-option>\n                                        <mat-option value="1">Lombardy</mat-option>\n                                        <mat-option value="1">Wellington</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-0">\n                                    <label class="form-label">City Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                            </div>\n\n\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary">Save</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- Add Modal End -->\n\n        <!-- edit Modal Start -->\n        <div id="edit_modal" class="modal fade">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h4 class="modal-title">Edit City</h4>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">Country Name<span class="text-danger ms-1">*</span></label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">United States</mat-option>\n                                        <mat-option value="1">United States</mat-option>\n                                        <mat-option value="1">Canada</mat-option>\n                                        <mat-option value="1">Germany</mat-option>\n                                        <mat-option value="1">United Kingdom</mat-option>\n                                        <mat-option value="1">France</mat-option>\n                                        <mat-option value="1">India</mat-option>\n                                        <mat-option value="1">Italy</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-3">\n                                    <label class="form-label">State Name<span class="text-danger ms-1">*</span></label>\n                                    <mat-select class="custom-mat-select select" placeholder="Select">\n                                        <mat-option value="1">California</mat-option>\n                                        <mat-option value="1">California</mat-option>\n                                        <mat-option value="1">England</mat-option>\n                                        <mat-option value="1">Le-de-France</mat-option>\n                                        <mat-option value="1">Buenos Aires</mat-option>\n                                        <mat-option value="1">Maharashtra</mat-option>\n                                        <mat-option value="1">Lombardy</mat-option>\n                                        <mat-option value="1">Wellington</mat-option>\n                                    </mat-select>\n                                </div>\n                            </div>\n\n                            <div class="col-md-12">\n                                <div class="mb-0">\n                                    <label class="form-label">State Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control" value="New South Wales">\n                                </div>\n                            </div>\n\n\n                        </div>\n                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- Edit Modal End -->\n\n        <!-- Delete Modal Start -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete City</h6>\n                        <p class="mb-3">Are you sure, you want to delete city?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Delete Modal End -->';
  }
});

// angular:jit:style:src/app/features/content/location/cities/cities.component.scss
var cities_component_default2;
var init_cities_component2 = __esm({
  "angular:jit:style:src/app/features/content/location/cities/cities.component.scss"() {
    cities_component_default2 = "/* src/app/features/content/location/cities/cities.component.scss */\n/*# sourceMappingURL=cities.component.css.map */\n";
  }
});

// src/app/features/content/location/cities/cities.component.ts
var CitiesComponent;
var init_cities_component3 = __esm({
  "src/app/features/content/location/cities/cities.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_cities_component();
    init_cities_component2();
    init_core();
    init_sort();
    init_table();
    init_router();
    init_core_index();
    init_pagination_service();
    init_common();
    init_ngx_editor();
    init_select();
    init_forms();
    init_custom_pagination_component();
    CitiesComponent = class CitiesComponent2 {
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
        this.data.getCities().subscribe((apiRes) => {
          this.actualData = apiRes.data;
          this.pagination.tablePageSize.subscribe((res) => {
            if (this.router.url == this.routes.cities) {
              this.getTableData({ skip: res.skip, limit: res.limit });
              this.pageSize = res.pageSize;
            }
          });
        });
      }
      getTableData(pageOption) {
        this.data.getCities().subscribe((apiRes) => {
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
      static ctorParameters = () => [
        { type: DataService },
        { type: Router },
        { type: PaginationService }
      ];
    };
    CitiesComponent = __decorate([
      Component({
        selector: "app-cities",
        imports: [
          CommonModule,
          NgxEditorModule,
          MatSelectModule,
          CustomPaginationComponent,
          MatSortModule,
          FormsModule
        ],
        template: cities_component_default,
        styles: [cities_component_default2]
      })
    ], CitiesComponent);
  }
});

// src/app/features/content/location/cities/cities.component.spec.ts
var require_cities_component_spec = __commonJS({
  "src/app/features/content/location/cities/cities.component.spec.ts"(exports) {
    init_testing();
    init_cities_component3();
    describe("CitiesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [CitiesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CitiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_cities_component_spec();
//# sourceMappingURL=spec-app-features-content-location-cities-cities.component.spec.js.map
