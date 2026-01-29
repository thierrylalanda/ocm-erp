import {
  MatSliderModule,
  init_slider
} from "./chunk-W5TEORCC.js";
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
  DateRangePickerComponent,
  init_date_range_picker_component
} from "./chunk-ASDSEI3A.js";
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
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
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
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/manage/membership/membership-addons/membership-addons.component.html
var membership_addons_component_default;
var init_membership_addons_component = __esm({
  "angular:jit:template:src/app/features/manage/membership/membership-addons/membership-addons.component.html"() {
    membership_addons_component_default = `            <!-- Start conatiner -->
            <div class="content-two">

                <!-- Page Header -->
                <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <div>
                        <h6>Membership</h6>
                    </div>
                   </div>
                <!-- End Page Header -->

                <ul class="nav nav-tabs nav-bordered mb-3">
                    <li class="nav-item"><a class="nav-link " [routerLink]="routes.membershipPlans">Membership Plans</a></li>
                    <li class="nav-item"><a class="nav-link active" [routerLink]="routes.membershipAddons">Membership Add-ons</a></li>
                </ul>

                <!-- Start Table Search -->
                <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <div class="table-search d-flex align-items-center mb-0">
                                <div class="search-input">
                                    <a href="javascript:void(0);" class="btn-searchset"><i class="isax isax-search-normal fs-12"></i></a>
                                    <div id="DataTables_Table_0_filter" class="dataTables_filter">
                                      <label> 
                                      <input type="search" [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0">
                                    </label>
                                  </div>
                                 </div>
                            </div>
                            <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">
                                <i class="isax isax-filter me-1"></i>Filter
                            </a>
                        </div>
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                    <i class="isax isax-sort me-1"></i>Sort By : <span class="fw-normal ms-1">Latest</span>
                                </a>
                                <ul class="dropdown-menu  dropdown-menu-end">
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Latest</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" class="dropdown-item">Oldest</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_addon"><i class="isax isax-add-circle5 me-1" ></i>New Addon</a>
                        </div>
                    </div>

                    <!-- Filter Info -->
                    <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
                        <h6 class="fs-13 fw-semibold">Filters</h6>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Plan Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
                    </div>
                    <!-- /Filter Info -->

                </div>
                <!-- End Table Search -->

                <!-- Start Table List -->
                <div class="table-responsive">
                    <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
                        <thead>
                            <tr>
                                <th mat-sort-header="name">Addon Name</th>
                                <th mat-sort-header="plan">Plan Name</th>
                                <th mat-sort-header="date">Created On</th>
                                <th mat-sort-header="price">Price</th>
                                <th class="no-sort">Status</th>
                                <th class="no-sort"></th>
                            </tr>
                        </thead>
                        <tbody>
                            @for (data of tableData;track data){
                            <tr>
                                <td>
                                    <p class="text-dark fw-medium">{{data.addonName}}</p>
                                </td>
                                <td>
                                    <p class="text-dark fw-medium">{{data.planName}}</p>
                                </td>
                                <td>
                                    {{data.createdOn}}
                                </td>
                                <td>
                                    <p class="text-dark">{{data.price}}</p>
                                </td>
                                <td>
                                    <span class="badge  d-inline-flex align-items-center"
                                    [ngClass]="data.status==='Inactive'?'badge-soft-danger':'badge-soft-success'">
                                    {{data.status}} 
                                    <i class="isax  ms-1"
                                    [ngClass]="data.status==='Inactive'?'isax-close-circle':'isax-tick-circle'"></i>
                                </span>
                                </td>
                                <td class="action-item">
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="isax isax-more"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_addon"><i class="isax isax-edit me-2"></i>Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        } @if(tableData.length === 0){
                            <tr>
                              <td colspan="12" class="text-center text-dark">No matching records found</td>
                            </tr>
                          }
                        </tbody>
                    </table>
                </div>
                <!-- End Table List -->
                <app-custom-pagination *ngIf="row"/>

            </div>
            <!-- conatiner -->



                   <!-- Start Filter -->
        <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">
            <div class="offcanvas-header d-block pb-0">
                <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
                    <h6 class="offcanvas-title">Filter</h6>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>
            <div class="offcanvas-body pt-3">
                <form action="#">
                    <div class="mb-3">
                        <label class="form-label">Addon Name</label>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                                <div class="mb-3">
                                    <div class="input-icon-start position-relative">
                                        <span class="input-icon-addon fs-12">
											<i class="isax isax-search-normal"></i>
										</span>
                                        <input type="text" class="form-control form-control-sm" placeholder="Search">
                                    </div>
                                </div>
                                <ul class="mb-3">
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Advanced Reports
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Audit Logs
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Financial Forecasting
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Extra Storage (Invoices)
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Payment Gateway Integration
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Real-time Notifications
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Recurring Invoice Automation
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Custom Invoice Due Dates
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> E-signature for Invoices
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Priority Support
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Plan Name</label>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                                <ul class="mb-3">
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Free
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Starter
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Business
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-purple me-1"></i>Enterprise
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label id="dateRangePicker" class="form-label">Date Range</label>
                        <div class="filter-daterange">
                            <app-date-range-picker></app-date-range-picker>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Price</label>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                                <div class="filter-range">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="irs" style="visibility: visible;">$0</span>
                                        <span class="irs" style="visibility: visible;">$1000</span>
                                    </div>
                                    <mat-slider
                                        min="0"
                                        max="1000"
                                        discrete
                                        [displayWith]="formatLabel"
                                    >
                                        <input value="350" matSliderThumb />
                                    </mat-slider>
                                    <p>Range : <span class="text-gray-9">$200 - $5695</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="form-label">Status</label>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                                <ul class="mb-3">
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Active
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Inactive
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="offcanvas-footer">
                        <div class="row g-2">
                            <div class="col-6">
                                <a href="javascript:void(0);" class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
                            </div>
                            <div class="col-6">
                                <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Filter -->

        <!-- Start Add Modal  -->
        <div id="add_addon" class="modal fade">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add New Addon</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Addon Name</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-12">

                                <div class="mb-3">
                                    <label class="form-label">Price</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-12">

                                <div class="mb-3">
                                    <label class="form-label">Created On</label>
                                    <div class="input-group position-relative mb-3 ngxdate">
                                        <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">
                                        <span class="input-icon-addon fs-16 text-gray-9">
                                            <i class="isax isax-calendar-2"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Status</label>
                                    <mat-select class="custom-mat-select select" placeholder="Select">
                                        <mat-option value="1">Active</mat-option>
                                        <mat-option value="1">Inactive</mat-option>
                                    </mat-select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Add Modal -->

        <!-- Start Add Modal  -->
        <div id="edit_addon" class="modal fade">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Addon</h4>
                        <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Addon Name</label>
                                    <input type="text" class="form-control" value="Extra Storage (Invoices)">
                                </div>
                            </div>
                            <div class="col-md-12">

                                <div class="mb-3">
                                    <label class="form-label">Price</label>
                                    <input type="text" class="form-control" value="$350">
                                </div>
                            </div>
                            <div class="col-md-12">

                                <div class="mb-3">
                                    <label class="form-label">Created On</label>
                                    <div class="input-group position-relative mb-3 ngxdate1">
                                        <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate1" placeholder="31 Jan 2025">
                                        <span class="input-icon-addon fs-16 text-gray-9">
                                            <i class="isax isax-calendar-2"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div>
                                    <label class="form-label">Status</label>
                                    <mat-select class="custom-mat-select select" placeholder="Active">
                                        <mat-option value="1">Active</mat-option>
                                        <mat-option value="1">Inactive</mat-option>
                                    </mat-select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                            <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Add Modal -->

        <!-- Start Delete Modal  -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="mb-3">
                            <img src="assets/img/icons/delete.svg" alt="img">
                        </div>
                        <h6 class="mb-1">Delete Addon</h6>
                        <p class="mb-3">Are you sure, you want to delete addon?</p>
                        <div class="d-flex justify-content-center">
                            <a href="javascript:void(0);" class="btn btn-outline-white me-3" data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Delete Modal  -->`;
  }
});

// angular:jit:style:src/app/features/manage/membership/membership-addons/membership-addons.component.scss
var membership_addons_component_default2;
var init_membership_addons_component2 = __esm({
  "angular:jit:style:src/app/features/manage/membership/membership-addons/membership-addons.component.scss"() {
    membership_addons_component_default2 = "/* src/app/features/manage/membership/membership-addons/membership-addons.component.scss */\n/*# sourceMappingURL=membership-addons.component.css.map */\n";
  }
});

// src/app/features/manage/membership/membership-addons/membership-addons.component.ts
var MembershipAddonsComponent;
var init_membership_addons_component3 = __esm({
  "src/app/features/manage/membership/membership-addons/membership-addons.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_membership_addons_component();
    init_membership_addons_component2();
    init_core();
    init_sort();
    init_table();
    init_router();
    init_core_index();
    init_pagination_service();
    init_forms();
    init_common();
    init_custom_pagination_component();
    init_date_range_picker_component();
    init_slider();
    init_select();
    init_ngx_bootstrap_datepicker();
    MembershipAddonsComponent = class MembershipAddonsComponent2 {
      data;
      router;
      pagination;
      routes = routes;
      formatLabel(value) {
        if (value >= 1e3) {
          return Math.round(value / 1e3) + "k";
        }
        return `${value}`;
      }
      showFilter = false;
      selectedFilter = [false];
      isFilter() {
        this.showFilter = !this.showFilter;
      }
      isSelectedFilter(index) {
        this.selectedFilter[index] = !this.selectedFilter[index];
      }
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
        this.data.getMembershipAddons().subscribe((apiRes) => {
          this.actualData = apiRes.data;
          this.pagination.tablePageSize.subscribe((res) => {
            if (this.router.url == this.routes.membershipAddons) {
              this.getTableData({ skip: res.skip, limit: res.limit });
              this.pageSize = res.pageSize;
            }
          });
        });
      }
      getTableData(pageOption) {
        this.data.getMembershipAddons().subscribe((apiRes) => {
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
    MembershipAddonsComponent = __decorate([
      Component({
        selector: "app-membership-addons",
        imports: [MatSliderModule, DateRangePickerComponent, CustomPaginationComponent, CommonModule, MatSortModule, FormsModule, RouterLink, MatSelectModule, BsDatepickerModule],
        template: membership_addons_component_default,
        styles: [membership_addons_component_default2]
      })
    ], MembershipAddonsComponent);
  }
});

// src/app/features/manage/membership/membership-addons/membership-addons.component.spec.ts
var require_membership_addons_component_spec = __commonJS({
  "src/app/features/manage/membership/membership-addons/membership-addons.component.spec.ts"(exports) {
    init_testing();
    init_membership_addons_component3();
    describe("MembershipAddonsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [MembershipAddonsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(MembershipAddonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_membership_addons_component_spec();
//# sourceMappingURL=spec-app-features-manage-membership-membership-addons-membership-addons.component.spec.js.map
