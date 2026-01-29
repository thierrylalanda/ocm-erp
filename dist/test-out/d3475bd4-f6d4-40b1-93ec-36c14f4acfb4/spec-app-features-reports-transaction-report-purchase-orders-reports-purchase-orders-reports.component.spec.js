import {
  NgApexchartsModule,
  init_ng_apexcharts
} from "./chunk-PWEWZXBA.js";
import {
  MatSliderModule,
  init_slider
} from "./chunk-W5TEORCC.js";
import {
  DateRangePicker2Component,
  init_date_range_picker_2_component
} from "./chunk-HMAGJIZR.js";
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
  ViewChild,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.html
var purchase_orders_reports_component_default;
var init_purchase_orders_reports_component = __esm({
  "angular:jit:template:src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.html"() {
    purchase_orders_reports_component_default = ` <!-- Start Container  -->
 <div class="content-two">

    <!-- Start Breadcrumb -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Purchase Orders Report</h6>
        </div>
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">
            <div class="dropdown me-1">
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
        </div>
    </div>
    <!-- End Breadcrumb -->

    <!-- start row -->
    <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <p class="mb-1 text-truncate">Total Purchase Orders</p>
                            <h6 class="fs-16 fw-semibold mb-0">280</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart3">
                                <apx-chart
                                    [series]="radialChart.series"
                                    [chart]="radialChart.chart"
                                    [colors]="radialChart.colors"
                                    [fill]="radialChart.fill"
                                    [xaxis]="radialChart.xaxis"
                                    [stroke]="radialChart.stroke"
                                    [dataLabels]="radialChart.dataLabels"
                                    [legend]="radialChart.legend"
                                    [plotOptions]="radialChart.plotOptions"
                                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <p class="mb-1 text-truncate"> Completed Orders</p>
                            <h6 class="fs-16 fw-semibold mb-0">240</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart4">
                                <apx-chart
                                    [series]="radialChart2.series"
                                    [chart]="radialChart2.chart"
                                    [colors]="radialChart2.colors"
                                    [fill]="radialChart2.fill"
                                    [xaxis]="radialChart2.xaxis"
                                    [stroke]="radialChart2.stroke"
                                    [dataLabels]="radialChart2.dataLabels"
                                    [legend]="radialChart2.legend"
                                    [plotOptions]="radialChart2.plotOptions"
                                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <p class="mb-1 text-truncate"> Pending Orders</p>
                            <h6 class="fs-16 fw-semibold mb-0">30</h6>
                        </div>
                        <div>
                            <div class="chart-set" id="radial-chart5">
                                <apx-chart
                                    [series]="radialChart3.series"
                                    [chart]="radialChart3.chart"
                                    [colors]="radialChart3.colors"
                                    [fill]="radialChart3.fill"
                                    [xaxis]="radialChart3.xaxis"
                                    [stroke]="radialChart3.stroke"
                                    [dataLabels]="radialChart3.dataLabels"
                                    [legend]="radialChart3.legend"
                                    [plotOptions]="radialChart3.plotOptions"
                                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card position-relative">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <p class="mb-1 text-truncate">Cancelled Orders</p>
                            <h6 class="fs-16 fw-semibold mb-0">10</h6>
                        </div>
                        <div>
                            <div class="chart-set no-tooltip" id="radial-chart6">
                                <apx-chart
                                    [series]="radialChart4.series"
                                    [chart]="radialChart4.chart"
                                    [colors]="radialChart4.colors"
                                    [fill]="radialChart4.fill"
                                    [stroke]="radialChart4.stroke"
                                    [dataLabels]="radialChart4.dataLabels"
                                    [legend]="radialChart4.legend"
                                    [plotOptions]="radialChart4.plotOptions"
                                ></apx-chart>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <!-- Start Table Search -->
    <div class="mb-3">

        <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div class="d-flex align-items-center gap-2 flex-wrap">
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
               <app-date-range-picker-2></app-date-range-picker-2>
                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">
                    <i class="isax isax-filter me-1"></i>Filter
                </a>
            </div>
            <div class="d-flex align-items-center flex-wrap gap-2">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <i class="isax isax-grid-3 me-1"></i>Column
                    </a>
                    <ul class="dropdown-menu  dropdown-menu">
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>ID</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Date</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Vendor</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Amount</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span>Payment Mode</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox">
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
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1" >5</span>Vendors Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[2]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">1</span>Status Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(2)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->
    </div>
    <!-- End Table Search -->

    <!-- Start Table List -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th class="no-sort">ID</th>
                    <th mat-sort-header="date">Date</th>
                    <th mat-sort-header="vendor">Vendor</th>
                    <th mat-sort-header="amount">Amount</th>
                    <th class="no-sort">Payment Mode</th>
                    <th class="no-sort">Status</th>
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
                        <a href="javascript:void(0);" class="link-default">{{data.id}}</a>
                    </td>
                    <td>{{data.date}}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.vendor}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td class="text-dark">{{data.amount}}</td>
                    <td class="text-dark">{{data.paymentMode}}</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center"
                        [ngClass]="data.status==='Pending'?' badge-soft-warning':data.status==='Cancelled'?' badge-soft-danger':'badge-soft-success'">
                        {{data.status}} 
                        <i class="isax ms-1"
                        [ngClass]="data.status==='Pending'?' isax-timer':data.status==='Cancelled'?' isax-close-circle':'isax-tick-circle'"></i>
                    </span>
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
<!-- container  -->


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
                        <label class="form-label">Vendor</label>
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
                                    <li class="d-flex align-items-center justify-content-between mb-3">
                                        <label class="d-inline-flex align-items-center text-gray-9">
                                            <input class="form-check-input select-all m-0 me-2" type="checkbox"> Select All
                                        </label>
                                        <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/reports/avatar-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emma Rose
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/reports/avatar-02.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Ethan James
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/reports/avatar-03.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Grace
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/reports/avatar-04.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Liam Michael
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
                        <label class="form-label">Amount</label>
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
                    <div class="mb-3">
                        <label class="form-label">Payment Mode</label>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
								Select
							</a>
                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                                <ul class="mb-3">
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Cash
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Check
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked> Bank Transfer
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Paypal
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox"> Stripe
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="dateRangePicker" class="form-label">Date Range</label>
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
                            <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                                <ul class="mb-3">
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <i class="fa-solid fa-circle fs-6 text-success me-1"></i>Paid
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox">
                                            <i class="fa-solid fa-circle fs-6 text-warning me-1"></i>Pending
                                        </label>
                                    </li>
                                    <li>
                                        <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                            <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                            <i class="fa-solid fa-circle fs-6 text-danger me-1"></i>Cancelled
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
        <!-- End Filter -->`;
  }
});

// angular:jit:style:src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.scss
var purchase_orders_reports_component_default2;
var init_purchase_orders_reports_component2 = __esm({
  "angular:jit:style:src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.scss"() {
    purchase_orders_reports_component_default2 = "/* src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.scss */\n/*# sourceMappingURL=purchase-orders-reports.component.css.map */\n";
  }
});

// src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.ts
var PurchaseOrdersReportsComponent;
var init_purchase_orders_reports_component3 = __esm({
  "src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_purchase_orders_reports_component();
    init_purchase_orders_reports_component2();
    init_core();
    init_sort();
    init_table();
    init_router();
    init_core_index();
    init_pagination_service();
    init_ng_apexcharts();
    init_common();
    init_forms();
    init_custom_pagination_component();
    init_slider();
    init_date_range_picker_component();
    init_date_range_picker_2_component();
    PurchaseOrdersReportsComponent = class PurchaseOrdersReportsComponent2 {
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
      chart;
      radialChart;
      radialChart2;
      radialChart3;
      radialChart4;
      ngOnInit() {
        this.radialChart = {
          chart: {
            type: "donut",
            height: 49,
            width: 49
          },
          series: [75, 25],
          // Adjust this for progress percentage
          labels: ["Completed", "Remaining"],
          colors: ["#7539FF", "#EFEEFF"],
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: false
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                size: "80%",
                // Adjust for better inner circle spacing
                labels: {
                  show: true,
                  name: {
                    show: false
                  },
                  value: {
                    show: true,
                    fontSize: "10px",
                    // Small font to fit the size
                    fontWeight: 600,
                    offsetY: 0,
                    color: "#7539FF",
                    formatter: function() {
                      return "75%";
                    }
                  }
                }
              }
            }
          },
          tooltip: {
            enabled: false
          }
        };
        this.radialChart2 = {
          chart: {
            type: "donut",
            height: 49,
            width: 49
          },
          series: [75, 25],
          // Adjust this for progress percentage
          labels: ["Completed", "Remaining"],
          colors: ["#27AE60", "#E9F7EF"],
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: false
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                size: "80%",
                // Adjust for better inner circle spacing
                labels: {
                  show: true,
                  name: {
                    show: false
                  },
                  value: {
                    show: true,
                    fontSize: "10px",
                    // Small font to fit the size
                    fontWeight: 600,
                    offsetY: 0,
                    color: "#7539FF",
                    formatter: function() {
                      return "75%";
                    }
                  }
                }
              }
            }
          },
          tooltip: {
            enabled: false
          }
        };
        this.radialChart3 = {
          chart: {
            type: "donut",
            height: 49,
            width: 49
          },
          series: [75, 25],
          // Adjust this for progress percentage
          labels: ["Completed", "Remaining"],
          colors: ["#E2B93B", "#FCF8EB"],
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: false
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                size: "80%",
                // Adjust for better inner circle spacing
                labels: {
                  show: true,
                  name: {
                    show: false
                  },
                  value: {
                    show: true,
                    fontSize: "10px",
                    // Small font to fit the size
                    fontWeight: 600,
                    offsetY: 0,
                    color: "#7539FF",
                    formatter: function() {
                      return "75%";
                    }
                  }
                }
              }
            }
          },
          tooltip: {
            enabled: false
          }
        };
        this.radialChart4 = {
          chart: {
            type: "donut",
            height: 49,
            width: 49
          },
          series: [75, 25],
          // Adjust this for progress percentage
          labels: ["Completed", "Remaining"],
          colors: ["#EF1E1E", "#FDE9E9"],
          legend: {
            show: false
          },
          dataLabels: {
            show: false,
            enabled: false
          },
          stroke: {
            show: false
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                size: "80%",
                // Adjust for better inner circle spacing
                labels: {
                  show: true,
                  name: {
                    show: false
                  },
                  value: {
                    show: true,
                    fontSize: "10px",
                    // Small font to fit the size
                    fontWeight: 600,
                    offsetY: 0,
                    color: "#7539FF",
                    formatter: function() {
                      return "75%";
                    }
                  }
                }
              }
            }
          },
          tooltip: {
            show: false,
            enabled: false
          }
        };
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
        this.data.getpurchaseorder().subscribe((apiRes) => {
          this.actualData = apiRes.data;
          this.pagination.tablePageSize.subscribe((res) => {
            if (this.router.url == this.routes.purchasesOrdersReport) {
              this.getTableData({ skip: res.skip, limit: res.limit });
              this.pageSize = res.pageSize;
            }
          });
        });
      }
      getTableData(pageOption) {
        this.data.getpurchaseorder().subscribe((apiRes) => {
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
      static propDecorators = {
        chart: [{ type: ViewChild, args: ["chart"] }]
      };
    };
    PurchaseOrdersReportsComponent = __decorate([
      Component({
        selector: "app-purchase-orders-reports",
        imports: [
          CommonModule,
          FormsModule,
          CustomPaginationComponent,
          MatSortModule,
          MatSliderModule,
          DateRangePickerComponent,
          DateRangePicker2Component,
          NgApexchartsModule
        ],
        template: purchase_orders_reports_component_default,
        styles: [purchase_orders_reports_component_default2]
      })
    ], PurchaseOrdersReportsComponent);
  }
});

// src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.spec.ts
var require_purchase_orders_reports_component_spec = __commonJS({
  "src/app/features/reports/transaction-report/purchase-orders-reports/purchase-orders-reports.component.spec.ts"(exports) {
    init_testing();
    init_purchase_orders_reports_component3();
    describe("PurchaseOrdersReportsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [PurchaseOrdersReportsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PurchaseOrdersReportsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_purchase_orders_reports_component_spec();
//# sourceMappingURL=spec-app-features-reports-transaction-report-purchase-orders-reports-purchase-orders-reports.component.spec.js.map
