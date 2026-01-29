import {
  MatSliderModule,
  init_slider
} from "./chunk-W5TEORCC.js";
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

// angular:jit:template:src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.html
var delete_account_request_component_default;
var init_delete_account_request_component = __esm({
  "angular:jit:template:src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.html"() {
    delete_account_request_component_default = '<!-- Start Content -->\n<div class="content-two">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Delete Account Request</h6>\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- Table Search Start -->\n    <div class="mb-3">\n        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="table-search d-flex align-items-center mb-0">\n                    <div class="search-input">\n                        <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                        <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                          <label> \n                          <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                        </label>\n                      </div>\n                     </div>\n    \n                </div>\n            </div>\n            <div class="d-flex align-items-center flex-wrap gap-2">\n                <div class="dropdown">\n                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                        <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>\n                    </a>\n                    <ul class="dropdown-menu  dropdown-menu-end">\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Latest</a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0);" class="dropdown-item">Oldest</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <!-- Filter Info -->\n        <div class="align-items-center gap-2 flex-wrap filter-info mt-3">\n            <h6 class="fs-13 fw-semibold">Filters</h6>\n            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Users Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n            <span class="tag bg-light border rounded-1 fs-12 text-dark badge"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Status Selected<span class="ms-1 tag-close"><i class="fa-solid fa-x fs-10"></i></span></span>\n            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1">Clear All</a>\n        </div>\n        <!-- /Filter Info -->\n    </div>\n    <!-- Table Search End -->\n\n    <!-- Table List Start -->\n    <div class="table-responsive">\n        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n            <thead class="thead-light">\n                <tr>\n                    <th mat-sort-header="user">User</th>\n                    <th mat-sort-header="delete">Delete Request Date</th>\n                    <th class="no-sort"></th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <img src="assets/img/users/{{data.img}}" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0" alt="img">\n                            <div>\n                                <h6 class="fs-14 fw-medium mb-0">{{data.user}}</h6>\n                            </div>\n                        </div>\n                    </td>\n                    <td>{{data.deleteRequestDate}}</td>\n                    <td>\n                        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center me-2" data-bs-toggle="modal" data-bs-target="#cancel_modal">\n                            <i class="isax isax-close-circle me-1"></i> Cancel\n                        </a>\n                        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#confirm_modal">\n                            <i class="isax isax-tick-circle me-1"></i> Confirm\n                        </a>\n                    </td>\n                </tr>\n            } @if(tableData.length === 0){\n                <tr>\n                  <td colspan="12" class="text-center text-dark">No matching records found</td>\n                </tr>\n              }\n            </tbody>\n        </table>\n    </div>\n    <!-- /Table List End -->\n     <app-custom-pagination *ngIf="row"></app-custom-pagination>\n\n</div>\n<!-- End Content -->\n\n\n\n        <!-- Confirm Modal Start -->\n        <div class="modal fade" id="confirm_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Confirm Request</h6>\n                        <p class="mb-3">Are you sure, you want to confirm request?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Confirm</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Confirm Modal End -->\n\n        <!-- Cancel Modal Start -->\n        <div class="modal fade" id="cancel_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/cancel.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Cancel Request</h6>\n                        <p class="mb-3">Are you sure, you want to cancel request?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Cancel</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Cancel Modal End -->';
  }
});

// angular:jit:style:src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.scss
var delete_account_request_component_default2;
var init_delete_account_request_component2 = __esm({
  "angular:jit:style:src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.scss"() {
    delete_account_request_component_default2 = "/* src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.scss */\n/*# sourceMappingURL=delete-account-request.component.css.map */\n";
  }
});

// src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.ts
var DeleteAccountRequestComponent;
var init_delete_account_request_component3 = __esm({
  "src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_delete_account_request_component();
    init_delete_account_request_component2();
    init_core();
    init_sort();
    init_table();
    init_router();
    init_core_index();
    init_pagination_service();
    init_slider();
    init_custom_pagination_component();
    init_common();
    init_forms();
    DeleteAccountRequestComponent = class DeleteAccountRequestComponent2 {
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
      static ctorParameters = () => [
        { type: DataService },
        { type: Router },
        { type: PaginationService }
      ];
    };
    DeleteAccountRequestComponent = __decorate([
      Component({
        selector: "app-delete-account-request",
        imports: [MatSliderModule, CustomPaginationComponent, CommonModule, MatSortModule, FormsModule],
        template: delete_account_request_component_default,
        styles: [delete_account_request_component_default2]
      })
    ], DeleteAccountRequestComponent);
  }
});

// src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.spec.ts
var require_delete_account_request_component_spec = __commonJS({
  "src/app/modules/manage-users/presentation/pages/delete-account-request/delete-account-request.component.spec.ts"(exports) {
    init_testing();
    init_delete_account_request_component3();
    describe("DeleteAccountRequestComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [DeleteAccountRequestComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DeleteAccountRequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_delete_account_request_component_spec();
//# sourceMappingURL=spec-app-modules-manage-users-presentation-pages-delete-account-request-delete-account-request.component.spec.js.map
