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
import "./chunk-WSBEZP5X.js";
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

// angular:jit:template:src/app/features/manage/manage-users/users/users.component.html
var users_component_default;
var init_users_component = __esm({
  "angular:jit:template:src/app/features/manage/manage-users/users/users.component.html"() {
    users_component_default = `<!-- Start Content -->
<div class="content-two">

    <!-- Page Header -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6>Users</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown">
                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
                    <i class="isax isax-export-1 me-1"></i>Export
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal">
                    <i class="isax isax-add-circle5 me-1"></i>New User
                </a>
            </div>
        </div>
    </div>
    <!-- End Page Header -->

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
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <i class="isax isax-grid-3 me-1"></i>Column
                    </a>
                    <ul class="dropdown-menu  dropdown-menu">
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>User</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Phone</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Role</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span>Last Activity</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Created On</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Status</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3 " [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Users Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">5</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->

    </div>

    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th mat-sort-header="user">User</th>
                    <th mat-sort-header="phone">Phone</th>
                    <th mat-sort-header="role">Role</th>
                    <th class="no-sort">Last Activity</th>
                    <th mat-sort-header="date">Create On</th>
                    <th class="no-sort">Status</th>
                    <th class="no-sort"></th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){
                <tr>
                    <td class="sorting_1">
                        <div class="form-check form-check-md" >
                            <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">
                        </div>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/users/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.user}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>{{data.phone}}</td>
                    <td class="text-dark">{{data.role}}</td>
                    <td class="text-dark">{{data.lastActivity}}</td>
                    <td>{{data.createdOn}}</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center"
                        [ngClass]="data.status==='Inactive'?'badge-soft-danger':'badge-soft-success'">{{data.status}}
                            <i class="isax ms-1"
                            [ngClass]="data.status==='Inactive'?'isax-close-circle ':'isax-tick-circle '"></i>
                        </span>
                    </td>
                    <td class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="isax isax-more"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>
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
        <app-custom-pagination *ngIf="row"></app-custom-pagination>
        <!-- end table -->
         
    </div>

</div>
<!-- End Content -->


<!-- Start Filter -->
<div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="customcanvas">
    <div class="offcanvas-header d-block pb-0">
        <div class="border-bottom d-flex align-items-center justify-content-between pb-3">
            <h6 class="offcanvas-title">Filter</h6>
            <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-x"></i></button>
        </div>
    </div>
    <div class="offcanvas-body pt-3">
        <form action="#">
            <div class="mb-3">
                <label class="form-label">Users</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div class="mb-3">
                            <div class="input-icon-start position-relative">
                                <span class="input-icon-addon fs-12">
                                    <i class="isax isax-search-normal"></i>
                                </span>
                                <input type="text" class="form-control form-control-sm" placeholder="Search">
                            </div>
                        </div>
                        <ul class="mb-3">
                            <li class="d-flex align-items-center justify-content-between mb-3">
                                <label class="d-inline-flex align-items-center text-gray-9">
                                    <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All
                                </label>
                                <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sarah Michelle
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-26.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Daniel Patrick
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-27.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Lauren
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/users/user-28.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Braun Kelton
                                </label>
                            </li>
                        </ul>
                        <div class="row g-2">
                            <div class="col-6">
                                <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>
                            </div>
                            <div class="col-6">
                                <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Date Range</label>
                <div class="filter-daterange">
                    <app-date-range-picker></app-date-range-picker>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">Status</label>
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                        Select
                    </a>
                    <div class="dropdown-menu shadow-lg w-100 dropdown-info p-2">
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
                    </div> <!-- end col -->
                    <div class="col-6">
                        <button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit" (click)="isFilter()">Submit</button>
                    </div> <!-- end col -->
                </div> <!-- end row -->
            </div>
        </form>
    </div>
</div>
<!-- End Filter -->

<!-- Start Modal  -->
<div id="add_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add New User</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div> <!-- end modal-header -->
            <form>
                <div class="modal-body pb-0">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                                        <i class="isax isax-image text-primary fs-24"></i>
                                    </div>
                                    <div class="d-inline-flex flex-column align-items-start">
                                        <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                                            <i class="isax isax-image me-1"></i>Upload Image
                                            <input type="file" class="form-control image-sign" multiple="">
                                        </div>
                                        <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">User Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label d-block">Phone Number<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" id="phone">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <div class="position-relative">
                                    <input type="password" [type]="show_password[3] === true?'text':'password'" class="pass-inputa form-control">
                                    <span class="isax toggle-password "(click)="show_password[3] = !show_password[3]"
                                    [ngClass]="
                                    show_password[3] === true
                                        ? 'toggle-password isax-eye'
                                        : 'toggle-password isax-eye-slash'
                                    "></span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
                                <div class="position-relative">
                                    <input type="password" [type]="show_password[2] === true?'text':'password'" class="pass-inputa form-control">
                                    <span class="isax toggle-password "(click)="show_password[2] = !show_password[2]"
                                    [ngClass]="
                                    show_password[2] === true
                                        ? 'toggle-password isax-eye'
                                        : 'toggle-password isax-eye-slash'
                                    "></span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Role</label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Admin</mat-option>
                                    <mat-option value="1">Customer</mat-option>
                                    <mat-option value="1">Shop Owner</mat-option>
                                    <mat-option value="1">Receptionist</mat-option>
                                </mat-select>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <mat-select class="custom-mat-select select" placeholder="Select">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Active</mat-option>
                                    <mat-option value="1">Inactive</mat-option>
                                </mat-select>
                            </div>
                        </div> <!-- end col -->
                    </div> <!-- end row -->
                </div> <!-- end modal-body -->
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary">Create</button>
                </div> <!-- end modal-footer -->
            </form>
        </div> <!-- end modal-content -->
    </div>
</div>
<!-- End Modal -->

<!-- Start Modal  -->
<div id="edit_modal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit User</h4>
                <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
            </div> <!-- end modal-header -->
            <form>
                <div class="modal-body pb-0">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <span class="text-gray-9 fw-bold mb-2 d-flex">Image</span>
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                                        <div class="position-relative d-flex align-items-center">
                                            <img src="assets/img/users/user-26.jpg" class="avatar avatar-xl" alt="User Img">
                                            <a href="javascript:void(0);" class="rounded-trash trash-top d-flex align-items-center justify-content-center"><i class="isax isax-trash"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-inline-flex flex-column align-items-start">
                                        <div class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                                            <i class="isax isax-image me-1"></i>Upload Image
                                            <input type="file" class="form-control image-sign" multiple="">
                                        </div>
                                        <span class="text-gray-9 fs-12">JPG or PNG format, not exceeding 5MB.</span>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">First Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="Daniel">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Last Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="Patrick">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label class="form-label">User Name<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="Daniel Patrick">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Email<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" value="danial@example.com">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label d-block">Phone Number<span class="text-danger ms-1">*</span></label>
                                <input type="text" class="form-control" id="phone2">
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <div class="position-relative">
                                    <input type="password" [type]="show_password[1] === true?'text':'password'" class="pass-inputa form-control">
                                    <span class="isax toggle-password "(click)="show_password[1] = !show_password[1]"
                                    [ngClass]="
                                    show_password[1] === true
                                        ? 'toggle-password isax-eye'
                                        : 'toggle-password isax-eye-slash'
                                    "></span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Confirm Password<span class="text-danger ms-1">*</span></label>
                                <div class="position-relative">
                                    <input type="password" [type]="show_password[0] === true?'text':'password'" class="pass-inputa form-control" value="123456">
                                    <span class="isax toggle-password "(click)="show_password[0] = !show_password[0]"
                                    [ngClass]="
                                    show_password[0] === true
                                        ? 'toggle-password isax-eye'
                                        : 'toggle-password isax-eye-slash'
                                    "></span>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Role</label>
                                <mat-select class="custom-mat-select select" placeholder="Admin">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Admin</mat-option>
                                    <mat-option value="1">Customer</mat-option>
                                    <mat-option value="1">Shop Owner</mat-option>
                                    <mat-option value="1">Receptionist</mat-option>
                                </mat-select>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <mat-select class="custom-mat-select select" placeholder="Active">
                                    <mat-option value="1">Select</mat-option>
                                    <mat-option value="1">Active</mat-option>
                                    <mat-option value="1">Inactive</mat-option>
                                </mat-select>
                            </div>
                        </div> <!-- end col -->
                    </div> <!-- end row -->
                </div> <!-- end modal-body -->
                <div class="modal-footer d-flex align-items-center justify-content-between gap-1">
                    <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
                </div> <!-- end modal-footer -->
            </form>
        </div> <!-- end modal-content -->
    </div>
</div>
<!-- End Modal -->

<!-- Start Modal  -->
<div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-body text-center">
                <div class="mb-3">
                    <img src="assets/img/icons/delete.svg" alt="img">
                </div>
                <h6 class="mb-1">Delete User</h6>
                <p class="mb-3">Are you sure, you want to delete User?</p>
                <div class="d-flex justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-white me-3" data-bs-dismiss="modal">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary" data-bs-dismiss="modal">Yes, Delete</a>
                </div>
            </div> <!-- end modal-body -->
        </div> <!-- end modal-content -->
    </div>
</div>
<!-- End Modal  -->`;
  }
});

// angular:jit:style:src/app/features/manage/manage-users/users/users.component.scss
var users_component_default2;
var init_users_component2 = __esm({
  "angular:jit:style:src/app/features/manage/manage-users/users/users.component.scss"() {
    users_component_default2 = "/* src/app/features/manage/manage-users/users/users.component.scss */\n/*# sourceMappingURL=users.component.css.map */\n";
  }
});

// src/app/features/manage/manage-users/users/users.component.ts
var UsersComponent;
var init_users_component3 = __esm({
  "src/app/features/manage/manage-users/users/users.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_users_component();
    init_users_component2();
    init_core();
    init_sort();
    init_table();
    init_router();
    init_core_index();
    init_pagination_service();
    init_forms();
    init_slider();
    init_date_range_picker_component();
    init_custom_pagination_component();
    init_common();
    init_select();
    UsersComponent = class UsersComponent2 {
      data;
      router;
      pagination;
      routes = routes;
      show_password = [false];
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
        this.data.getUsers().subscribe((apiRes) => {
          this.actualData = apiRes.data;
          this.pagination.tablePageSize.subscribe((res) => {
            if (this.router.url == this.routes.users) {
              this.getTableData({ skip: res.skip, limit: res.limit });
              this.pageSize = res.pageSize;
            }
          });
        });
      }
      getTableData(pageOption) {
        this.data.getUsers().subscribe((apiRes) => {
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
    UsersComponent = __decorate([
      Component({
        selector: "app-users",
        imports: [MatSliderModule, DateRangePickerComponent, CustomPaginationComponent, CommonModule, MatSortModule, FormsModule, MatSelectModule],
        template: users_component_default,
        styles: [users_component_default2]
      })
    ], UsersComponent);
  }
});

// src/app/features/manage/manage-users/users/users.component.spec.ts
var require_users_component_spec = __commonJS({
  "src/app/features/manage/manage-users/users/users.component.spec.ts"(exports) {
    init_testing();
    init_users_component3();
    describe("UsersComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [UsersComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_users_component_spec();
//# sourceMappingURL=spec-app-features-manage-manage-users-users-users.component.spec.js.map
