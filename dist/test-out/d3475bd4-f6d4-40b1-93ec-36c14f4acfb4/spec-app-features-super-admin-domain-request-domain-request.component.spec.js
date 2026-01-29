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
  BsDatepickerModule,
  init_ngx_bootstrap_datepicker
} from "./chunk-WSBEZP5X.js";
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
import "./chunk-SR4JAI3W.js";
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
  RouterLink,
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
import "./chunk-FWMZPJRE.js";

// src/app/features/super-admin/domain-request/domain-request.component.spec.ts
init_testing();

// src/app/features/super-admin/domain-request/domain-request.component.ts
init_tslib_es6();

// angular:jit:template:src/app/features/super-admin/domain-request/domain-request.component.html
var domain_request_component_default = `<!-- Page Header -->
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
  <!-- /Delete Items Modal -->`;

// angular:jit:style:src/app/features/super-admin/domain-request/domain-request.component.scss
var domain_request_component_default2 = "/* src/app/features/super-admin/domain-request/domain-request.component.scss */\n/*# sourceMappingURL=domain-request.component.css.map */\n";

// src/app/features/super-admin/domain-request/domain-request.component.ts
init_common();
init_core();
init_sort();
init_table();
init_router();
init_core_index();
init_pagination_service();
init_ngx_bootstrap_datepicker();
init_forms();
init_custom_pagination_component();
var DomainRequestComponent = class DomainRequestComponent2 {
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
  static ctorParameters = () => [
    { type: DataService },
    { type: PaginationService },
    { type: Router }
  ];
};
DomainRequestComponent = __decorate([
  Component({
    selector: "app-domain-request",
    template: domain_request_component_default,
    imports: [CommonModule, BsDatepickerModule, FormsModule, CustomPaginationComponent, RouterLink, MatSortModule],
    styles: [domain_request_component_default2]
  })
], DomainRequestComponent);

// src/app/features/super-admin/domain-request/domain-request.component.spec.ts
describe("DomainRequestComponent", () => {
  let component;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomainRequestComponent]
    });
    fixture = TestBed.createComponent(DomainRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-features-super-admin-domain-request-domain-request.component.spec.js.map
