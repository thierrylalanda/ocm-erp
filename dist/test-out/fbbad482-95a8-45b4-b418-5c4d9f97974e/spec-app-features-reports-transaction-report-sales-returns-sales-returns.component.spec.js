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
  DateRangePickerComponent,
  init_date_range_picker_component
} from "./chunk-ASDSEI3A.js";
import "./chunk-WSBEZP5X.js";
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
import "./chunk-SR4JAI3W.js";
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

// angular:jit:template:src/app/features/reports/transaction-report/sales-returns/sales-returns.component.html
var sales_returns_component_default;
var init_sales_returns_component = __esm({
  "angular:jit:template:src/app/features/reports/transaction-report/sales-returns/sales-returns.component.html"() {
    sales_returns_component_default = `			<!-- Start Content -->
			<div class="content-two">

				<!-- Page Header -->
				<div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
					<div>
						<h6 class="mb-0">Sales Return Report</h6>
					</div>
					<div class="my-xl-auto">
						<div class="dropdown">
							<a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"  data-bs-toggle="dropdown">
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
				<!-- End Page Header -->

				<div class="border-bottom mb-3">

					<!-- start row -->
					<div class="row">
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div>
										<p class="mb-2">Total Returns</p>
										<div class="d-flex align-items-end justify-content-between  mt-1">
											<div>
												<h6 class="fs-16 fw-semibold mb-1">$50,000 <span class="text-success fw-normal fs-13 ms-2"><i class="isax isax-send fs-10"></i>5.62%</span></h6>
												<p class="fs-13 text-truncate">Compare to last month</p>
											</div>
											<div id="report_chart">
												<apx-chart
												[series]="reportChart.series"
												[chart]="reportChart.chart"
												[colors]="reportChart.colors"
												[fill]="reportChart.fill"
												[stroke]="reportChart.stroke"
												[dataLabels]="reportChart.dataLabels"
												[legend]="reportChart.legend"
												[plotOptions]="reportChart.plotOptions"
											></apx-chart>
											</div>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div>
										<p class="mb-2">Returned Invoices</p>
										<div class="d-flex align-items-end justify-content-between  mt-1">
											<div>
												<h6 class="fs-16 fw-semibold mb-1">154<span class="text-success fw-normal fs-13 ms-2"><i class="isax isax-send fs-10"></i>11.4%</span></h6>
												<p class="fs-13 text-truncate">Compare to last month</p>
											</div>
											<div id="report_chart_2">
												<apx-chart
												[series]="reportChart2.series"
												[chart]="reportChart2.chart"
												[colors]="reportChart2.colors"
												[fill]="reportChart2.fill"
												[stroke]="reportChart2.stroke"
												[dataLabels]="reportChart2.dataLabels"
												[legend]="reportChart2.legend"
												[plotOptions]="reportChart2.plotOptions"
											></apx-chart>
											</div>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div>
										<p class="mb-2 text-truncate">Total Sales Loss Due to Returns</p>
										<div class="d-flex align-items-end justify-content-between  mt-1">
											<div>
												<h6 class="fs-16 fw-semibold mb-1 d-flex flex-wrap">$25,000<span class="text-success fw-normal fs-13 ms-2"><i class="isax isax-send fs-10"></i>8.52%</span></h6>
												<p class="fs-13 text-truncate">Compare to last month</p>
											</div>
											<div id="report_chart_3">
												<apx-chart
												[series]="reportChart3.series"
												[chart]="reportChart3.chart"
												[colors]="reportChart3.colors"
												[fill]="reportChart3.fill"
												[stroke]="reportChart3.stroke"
												[dataLabels]="reportChart3.dataLabels"
												[legend]="reportChart3.legend"
												[plotOptions]="reportChart3.plotOptions"
											></apx-chart>
											</div>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
						<div class="col-xl-3 col-lg-4 col-md-6">
							<div class="card position-relative">
								<div class="card-body">
									<div>
										<p class="mb-2">Total Returns</p>
										<div class="d-flex align-items-end justify-content-between  mt-1">
											<div>
												<h6 class="fs-16 fw-semibold mb-1">$50,000 <span class="text-success fw-normal fs-13 ms-2"><i class="isax isax-send fs-10"></i>5.62%</span></h6>
												<p class="fs-13 text-truncate">Compare to last month</p>
											</div>
											<div id="report_chart_4">
												<apx-chart
												[series]="reportChart4.series"
												[chart]="reportChart4.chart"
												[colors]="reportChart4.colors"
												[fill]="reportChart4.fill"
												[stroke]="reportChart4.stroke"
												[dataLabels]="reportChart4.dataLabels"
												[legend]="reportChart4.legend"
												[plotOptions]="reportChart4.plotOptions"
											></apx-chart>
											</div>
										</div>
									</div>
								</div><!-- end card body -->
							</div><!-- end card -->
						</div><!-- end col -->
					</div>
					<!-- end row -->
				</div>
				
				<!-- Table Search -->
				<div class="mb-3">
					<div class="d-flex align-items-center justify-content-between gap-3 flex-wrap">
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
											<span>Quotation ID</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Customer</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Status</span>
										</label>
									</li>
									<li>
										<label class="dropdown-item d-flex align-items-center form-switch">
											<i class="fa-solid fa-grip-vertical me-3 text-default"></i>
											<input class="form-check-input m-0 me-2" type="checkbox" checked>
											<span>Created On</span>
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>				

				</div>
				<!-- /Table Search -->
				
				<!-- Table List -->
				<div class="table-responsive">
					<table matSort (matSortChange)="sortData($event)" class="table table-nowrap dataTable datatable">
						<thead>
							<tr>
								<th class="no-sort">
									<div class="form-check form-check-md" (click)="selectAll(initChecked)">
										<input class="form-check-input" type="checkbox" id="select-all"  [(ngModel)]="initChecked">
									</div>
								</th>
								<th class="no-sort">Credit Note ID</th>
								<th mat-sort-header="customer">Customer</th>
								<th mat-sort-header="amount">Amount</th>
								<th class="no-sort">Related To</th>
								<th class="no-sort">Payment Mode</th>
								<th mat-sort-header="date">Created On</th>
								<th mat-sort-header="status">Status</th>
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
									<a href="javascript:void(0);" class="link-default">{{data.creditNoteId}}</a>
								</td>
								<td>
                                    <div class="d-flex align-items-center">
										<a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
											<img src="assets/img/profiles/{{data.img}}" class="rounded-circle" alt="img">
										</a>
										<div>
											<h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.customer}}</a></h6>
										</div>
									</div>
                                </td>
								<td class="text-dark">
									{{data.amount}}
								</td>
								<td><a href="javascript:void(0);" class="link-default">{{data.relatedTo}}</a></td>
								<td class="text-dark">
									{{data.paymentMode}}
								</td>
								<td>
									{{data.createdOn}}
								</td>
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
				<!-- /Table List -->

				<app-custom-pagination *ngIf="row"/>
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
						<label class="form-label">Customer</label>
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
											<input class="form-check-input select-all m-0 me-2" type="checkbox">
											Select All
										</label>
										<a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline">Reset</a>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-18.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Emily Clark
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-29.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>John Carter
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Sophia White
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Michael Johnson
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Olivia Harris
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											<span class="avatar avatar-sm rounded-circle me-2"><img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>David Anderson
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
								<ul class="mb-0">
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
											Cash
										</label>
									</li>
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
                                            Check
										</label>
									</li>
                                    <li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
                                            Bank Transfer
										</label>
									</li>
                                    <li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
                                            Paypal
										</label>
									</li>
                                    <li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
                                            Stripe
										</label>
									</li>
								</ul>
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
							<div class="dropdown-menu shadow-lg w-100 dropdown-info">	
								<ul class="mb-0">
									<li>
										<label class="dropdown-item px-2 d-flex align-items-center text-dark">
											<input class="form-check-input m-0 me-2" type="checkbox">
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
											<input class="form-check-input m-0 me-2" type="checkbox">
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
								<a href="javascript:void(0);"  class="btn btn-outline-white w-100" data-bs-dismiss="offcanvas">Reset</a>
							</div>
							<div class="col-6">
								<button data-bs-dismiss="offcanvas" class="btn btn-primary w-100" id="filter-submit">Submit</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<!-- End Filter -->`;
  }
});

// angular:jit:style:src/app/features/reports/transaction-report/sales-returns/sales-returns.component.scss
var sales_returns_component_default2;
var init_sales_returns_component2 = __esm({
  "angular:jit:style:src/app/features/reports/transaction-report/sales-returns/sales-returns.component.scss"() {
    sales_returns_component_default2 = "/* src/app/features/reports/transaction-report/sales-returns/sales-returns.component.scss */\n/*# sourceMappingURL=sales-returns.component.css.map */\n";
  }
});

// src/app/features/reports/transaction-report/sales-returns/sales-returns.component.ts
var SalesReturnsComponent;
var init_sales_returns_component3 = __esm({
  "src/app/features/reports/transaction-report/sales-returns/sales-returns.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_sales_returns_component();
    init_sales_returns_component2();
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
    SalesReturnsComponent = class SalesReturnsComponent2 {
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
      chart;
      reportChart;
      reportChart2;
      reportChart3;
      reportChart4;
      ngOnInit() {
        this.reportChart = {
          series: [{
            data: [0, 6, 24, 14, 20, 15, 37]
          }],
          chart: {
            type: "area",
            width: 70,
            height: 46,
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            curve: "smooth",
            width: 2
          },
          colors: ["#7539FF"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function(seriesName) {
                  return "";
                }
              }
            },
            marker: {
              show: false
            }
          }
        };
        this.reportChart2 = {
          series: [{
            data: [0, 6, 24, 14, 20, 15, 37]
          }],
          chart: {
            type: "area",
            width: 70,
            height: 50,
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            curve: "smooth",
            width: 2
          },
          colors: ["#27AE60"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function(seriesName) {
                  return "";
                }
              }
            },
            marker: {
              show: false
            }
          }
        };
        this.reportChart3 = {
          series: [{
            data: [0, 6, 24, 14, 20, 15, 37]
          }],
          chart: {
            type: "area",
            width: 70,
            height: 50,
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            curve: "smooth",
            width: 2
          },
          colors: ["#E2B93B"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function(seriesName) {
                  return "";
                }
              }
            },
            marker: {
              show: false
            }
          }
        };
        this.reportChart4 = {
          series: [{
            data: [0, 6, 24, 14, 20, 15, 37]
          }],
          chart: {
            type: "area",
            width: 70,
            height: 50,
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            curve: "smooth",
            width: 2
          },
          colors: ["#EF1E1E"],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function() {
                  return "";
                }
              }
            },
            marker: {
              show: false
            }
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
        this.data.getSalesReturnReport().subscribe((apiRes) => {
          this.actualData = apiRes.data;
          this.pagination.tablePageSize.subscribe((res) => {
            if (this.router.url == this.routes.salesReturns) {
              this.getTableData({ skip: res.skip, limit: res.limit });
              this.pageSize = res.pageSize;
            }
          });
        });
      }
      getTableData(pageOption) {
        this.data.getSalesReturnReport().subscribe((apiRes) => {
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
    SalesReturnsComponent = __decorate([
      Component({
        selector: "app-sales-returns",
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
        template: sales_returns_component_default,
        styles: [sales_returns_component_default2]
      })
    ], SalesReturnsComponent);
  }
});

// src/app/features/reports/transaction-report/sales-returns/sales-returns.component.spec.ts
var require_sales_returns_component_spec = __commonJS({
  "src/app/features/reports/transaction-report/sales-returns/sales-returns.component.spec.ts"(exports) {
    init_testing();
    init_sales_returns_component3();
    describe("SalesReturnsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SalesReturnsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SalesReturnsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_sales_returns_component_spec();
//# sourceMappingURL=spec-app-features-reports-transaction-report-sales-returns-sales-returns.component.spec.js.map
