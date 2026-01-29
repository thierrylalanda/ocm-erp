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

// angular:jit:template:src/app/features/application/contacts/contacts.component.html
var contacts_component_default;
var init_contacts_component = __esm({
  "angular:jit:template:src/app/features/application/contacts/contacts.component.html"() {
    contacts_component_default = '			<!-- Start Content -->\n            <div class="content-two">\n				<div class="mb-3">\n					<h4>Contacts</h4>\n				</div>\n                <div class=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">\n                    <div class="search-set mb-0">\n                        <div class="d-flex align-items-center flex-wrap gap-2">\n                            <div class="table-search d-flex align-items-center mb-0">\n                                <div class="search-input">\n                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>\n                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">\n                                      <label> \n                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">\n                                    </label>\n                                  </div>\n                                 </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">\n\n                        <div class="dropdown me-2">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white btn-md d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                                Status\n                            </a>\n                            <ul class="dropdown-menu  dropdown-menu-end p-3">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>\n                                </li>\n\n                            </ul>\n                        </div>\n                        <div class="dropdown">\n                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white btn-md d-inline-flex align-items-center fw-medium" data-bs-toggle="dropdown">\n                                Sort By : Last 7 Days\n                            </a>\n                            <ul class="dropdown-menu  dropdown-menu-end p-3">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <a href="javascript:void(0);" class="btn btn-primary text-white ms-2" data-bs-toggle="modal" data-bs-target="#add-contact"><i class="ti ti-circle-plus me-1"></i>Add Contact</a>\n                    </div>\n                </div>\n                <div class="table-responsive">\n                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">\n                        <thead class="thead-light">\n                            <tr>\n                                <th class="no-sort">\n                                    <div class="form-check form-check-md" (click)="selectAll(initChecked)">\n                                        <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">\n                                    </div>\n                                </th>\n                                <th mat-sort-header="name">Name</th>\n                                <th mat-sort-header="email">Email</th>\n                                <th mat-sort-header="phone">Phone</th>\n                                <th mat-sort-header="role">Role</th>\n                                <th mat-sort-header="status">Status</th>\n                                <th class="no-sort"></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            @for (data of tableData;track data){\n                            <tr>\n                                <td class="sorting_1">\n                                    <div class="form-check form-check-md" >\n                                        <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm me-2">\n                                            <img src="assets/img/users/{{data.img}}" alt="product" class="rounded-circle">\n                                        </a>\n                                        <a href="javascript:void(0);">{{data.name}}</a>\n                                    </div>\n                                </td>\n                                <td>{{data.email}}</td>\n                                <td>{{data.phone}}</td>\n                                <td>{{data.role}}</td>\n                                <td><span class="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10"><i class="ti ti-point-filled me-1 fs-11"></i>{{data.status}}</span></td>\n                                <td class="action-item">\n                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                        <i class="fa-solid fa-ellipsis"></i>\n                                    </a>\n                                    <ul class="dropdown-menu">\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit-contact"><i class="isax isax-eye me-2"></i>Edit</a>\n                                        </li>\n                                        <li>\n                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                        </li>\n                                    </ul>\n                                </td>\n                            </tr>\n                        } @if(tableData.length === 0){\n                            <tr>\n                              <td colspan="12" class="text-center text-dark">No matching records found</td>\n                            </tr>\n                          }\n                \n                        </tbody>\n                    </table>\n                </div>\n                <app-custom-pagination *ngIf="row"/>\n            </div>\n			<!-- End Content -->\n\n\n\n                    <!-- Start Add Customer -->\n        <div class="modal fade" id="add-contact">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <div class="page-title">\n                            <h5>Add Contact</h5>\n                        </div>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="new-employee-field">\n                                <div class="profile-pic-upload bg-light">\n                                    <div class="profile-pic">\n                                        <span><i data-feather="plus-circle" class="plus-down-add"></i> Add Image</span>\n                                    </div>\n                                    <div class="mb-3">\n                                        <div class="image-upload mb-0">\n                                            <input type="file">\n                                            <div class="image-uploads">\n                                                <h4>Upload Image</h4>\n                                            </div>\n                                        </div>\n                                        <p class="mt-2">JPEG, PNG up to 2 MB</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-6 mb-3">\n                                    <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                                <div class="col-lg-6 mb-3">\n                                    <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control">\n                                </div>\n                                <div class="col-lg-12 mb-3">\n                                    <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                                    <input type="email" class="form-control">\n                                </div>\n                                <div class="col-lg-12 mb-3">\n                                    <label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n                                    <input type="tel" class="form-control">\n                                </div>\n                                <div class="col-lg-12">\n                                    <div class="mb-0">\n                                        <label class="form-label">Contact Type <span class="text-danger">*</span></label>\n                                        <mat-select class="custom-mat-select select" placeholder="Select">\n                                            <mat-option value="1">Select</mat-option>\n                                            <mat-option value="1">Admin</mat-option>\n                                            <mat-option value="1">Salesman</mat-option>\n                                        </mat-select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="modal-footer">\n                            <button type="button" class="btn me-2 btn-light fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3">Add Contact</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Add Customer -->\n\n        <!-- Start Edit Customer -->\n        <div class="modal fade" id="edit-contact">\n            <div class="modal-dialog modal-dialog-centered">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <div class="page-title">\n                            <h5>Edit Contact</h5>\n                        </div>\n                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n                    </div>\n                    <form>\n                        <div class="modal-body">\n                            <div class="new-employee-field">\n                                <div class="profile-pic-upload image-field">\n                                    <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">\n                                        <div class="position-relative d-flex align-items-center">\n                                            <img src="assets/img/users/user-01.jpg" class="avatar avatar-xl " alt="User Img">\n                                            <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>\n                                        </div>\n                                    </div>\n                                    <div class="mb-3">\n                                        <div class="image-upload mb-0">\n                                            <input type="file">\n                                            <div class="image-uploads">\n                                                <h4>Change Image</h4>\n                                            </div>\n                                        </div>\n                                        <p class="mt-2">JPEG, PNG up to 2 MB</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="row">\n                                <div class="col-lg-6 mb-3">\n                                    <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control" value="Carl">\n                                </div>\n                                <div class="col-lg-6 mb-3">\n                                    <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>\n                                    <input type="text" class="form-control" value="Evans">\n                                </div>\n                                <div class="col-lg-12 mb-3">\n                                    <label class="form-label">Email<span class="text-danger ms-1">*</span></label>\n                                    <input type="email" class="form-control" value="carlevans@example.com">\n                                </div>\n                                <div class="col-lg-12 mb-3">\n                                    <label class="form-label">Phone<span class="text-danger ms-1">*</span></label>\n                                    <input type="tel" class="form-control" value="+12163547758 ">\n                                </div>\n                                <div class="col-lg-12">\n                                    <div class="mb-0">\n                                        <label class="form-label">Contact Type <span class="text-danger">*</span></label>\n                                        <mat-select class="custom-mat-select select" placeholder="Admin">\n                                            <mat-option value="1">Select</mat-option>\n                                            <mat-option value="1">Admin</mat-option>\n                                            <mat-option value="1">Salesman</mat-option>\n                                        </mat-select>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class="modal-footer">\n                            <button type="button" class="btn me-2 btn-light fs-13 fw-medium p-2 px-3 shadow-none" data-bs-dismiss="modal">Cancel</button>\n                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal">Save Changes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <!-- End Edit Customer -->\n\n        <!-- Start Delete Modal  -->\n        <div class="modal fade" id="delete_modal">\n            <div class="modal-dialog modal-dialog-centered modal-sm">\n                <div class="modal-content">\n                    <div class="modal-body text-center">\n                        <div class="mb-3">\n                            <img src="assets/img/icons/delete.svg" alt="img">\n                        </div>\n                        <h6 class="mb-1">Delete Contact</h6>\n                        <p class="mb-3">Are you sure, you want to delete ontact?</p>\n                        <div class="d-flex justify-content-center">\n                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>\n                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Delete Modal  -->';
  }
});

// angular:jit:style:src/app/features/application/contacts/contacts.component.scss
var contacts_component_default2;
var init_contacts_component2 = __esm({
  "angular:jit:style:src/app/features/application/contacts/contacts.component.scss"() {
    contacts_component_default2 = "/* src/app/features/application/contacts/contacts.component.scss */\n/*# sourceMappingURL=contacts.component.css.map */\n";
  }
});

// src/app/features/application/contacts/contacts.component.ts
var ContactsComponent;
var init_contacts_component3 = __esm({
  "src/app/features/application/contacts/contacts.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_contacts_component();
    init_contacts_component2();
    init_common();
    init_core();
    init_sort();
    init_table();
    init_router();
    init_core_index();
    init_pagination_service();
    init_select();
    init_custom_pagination_component();
    init_forms();
    ContactsComponent = class ContactsComponent2 {
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
        this.data.getContacts().subscribe((apiRes) => {
          this.actualData = apiRes.data;
          this.pagination.tablePageSize.subscribe((res) => {
            if (this.router.url == this.routes.contacts) {
              this.getTableData({ skip: res.skip, limit: res.limit });
              this.pageSize = res.pageSize;
            }
          });
        });
      }
      getTableData(pageOption) {
        this.data.getContacts().subscribe((apiRes) => {
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
    ContactsComponent = __decorate([
      Component({
        selector: "app-contacts",
        template: contacts_component_default,
        imports: [CommonModule, MatSelectModule, CustomPaginationComponent, FormsModule, MatSortModule],
        styles: [contacts_component_default2]
      })
    ], ContactsComponent);
  }
});

// src/app/features/application/contacts/contacts.component.spec.ts
var require_contacts_component_spec = __commonJS({
  "src/app/features/application/contacts/contacts.component.spec.ts"(exports) {
    init_testing();
    init_contacts_component3();
    describe("ContactsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ContactsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ContactsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_contacts_component_spec();
//# sourceMappingURL=spec-app-features-application-contacts-contacts.component.spec.js.map
