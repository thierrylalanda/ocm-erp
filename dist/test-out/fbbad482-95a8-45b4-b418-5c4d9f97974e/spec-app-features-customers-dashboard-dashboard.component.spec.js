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
import "./chunk-WSBEZP5X.js";
import "./chunk-ZQVU7KV2.js";
import "./chunk-Y46UO4F7.js";
import "./chunk-WYJ2IQUD.js";
import "./chunk-BDO5G4JQ.js";
import "./chunk-V5QKIDZC.js";
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
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import {
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

// angular:jit:template:src/app/features/customers/dashboard/dashboard.component.html
var dashboard_component_default;
var init_dashboard_component = __esm({
  "angular:jit:template:src/app/features/customers/dashboard/dashboard.component.html"() {
    dashboard_component_default = '<!-- Start Content -->\n<div class="">\n\n    <!-- Page Header -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n        <div>\n            <h6>Dashboard</h6>\n        </div>\n        <div class="custom-daterange-customer">\n            <app-date-range-picker-2/>\n        </div>\n    </div>\n    <!-- End Page Header -->\n\n    <!-- start row -->\n    <div class="row">\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Total Invoice</p>\n                            <h6 class="fs-16 fw-semibold"> \u20B9250,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-primary text-white avatar-rounded">\n                            <i class="isax isax-dollar-circle fs-24"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>5.62%</span> from last month</p>\n                </div><!-- end card body -->\n                <div class="position-absolute start-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/income-report-1.svg" alt="img">\n                </div>\n            </div><!-- end card -->\n        </div><!-- end col -->\n\n        <!-- Outstanding -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Outstanding</p>\n                            <h6 class="fs-16 fw-semibold">\u20B9100,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-success text-white avatar-rounded">\n                            <i class="isax isax-bag-2 fs-24"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>11.4%</span> from last month</p>\n                </div><!-- end card body -->\n                <div class="position-absolute start-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/income-report-2.svg" alt="img">\n                </div>\n            </div><!-- end card -->\n        </div>\n        <!-- /Outstanding -->\n\n        <!-- Overdue -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Overdue</p>\n                            <h6 class="fs-16 fw-semibold">\u20B9400,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-warning text-white avatar-rounded">\n                            <i class="isax isax-wallet-3 fs-24"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>8.12%</span> from last month</p>\n                </div><!-- end card body -->\n                <div class="position-absolute start-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/income-report-3.svg" alt="img">\n                </div>\n            </div><!-- end card -->\n        </div>\n        <!-- /Overdue -->\n\n        <!-- Cancelled -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between mb-3">\n                        <div>\n                            <p class="mb-1">Cancelled</p>\n                            <h6 class="fs-16 fw-semibold">\u20B9300,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-danger text-white avatar-rounded">\n                            <i class="isax isax-wallet-money fs-24"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>7.45%</span> from last month</p>\n                </div><!-- end card body -->\n                <div class="position-absolute start-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/income-report-4.svg" alt="img">\n                </div>\n            </div><!-- end card -->\n        </div>\n        <!-- /Cancelled -->\n\n    </div>\n    <!-- end row -->\n\n    <div class="row">\n\n        <!-- Start Sales Analytics -->\n        <div class="col-xl-4 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body">\n                    <div class="mb-3">\n                        <h6 class="mb-1">Invoice Detail</h6>\n                    </div>\n                    <div class="bg-dark-gradient  p-3 rounded mb-2">\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <h6 class="fs-16 fw-semibold  text-white">#INV215654</h6>\n                            <span class="badge badge-sm bg-danger bg-danger">Due in 8 days</span>\n                        </div>\n                        <div class="row">\n                            <div class="col">\n                                <div>\n                                    <p class="fs-13 text-light mb-1">Issued On</p>\n                                    <h6 class="fs-14 text-white fw-semibold text-truncate">25 Jan 2025</h6>\n                                </div>\n                            </div>\n                            <div class="col">\n                                <div>\n                                    <p class="fs-13 text-light mb-1">Due Date</p>\n                                    <h6 class="fs-14 text-white fw-semibold text-truncate">31 Jan 2025</h6>\n                                </div>\n                            </div>\n                            <div class="col">\n                                <div>\n                                    <p class="fs-13 text-light mb-1">Recurring</p>\n                                    <h6 class="fs-14 text-white fw-semibold text-truncate">Monthly</h6>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card border-0 bg-light mb-3 shadow-none">\n                        <div class="card-body">\n                            <div class="mb-3 pb-2 border-bottom">\n                                <p class="text-dark mb-1">Amount <span class="float-end">$565</span></p>\n                                <p class="text-dark mb-1">GST (9%) <span class="float-end">$18</span></p>\n                                <p class="text-dark mb-1">Amount <span class="text-danger float-end">- $18</span></p>\n                            </div>\n                            <h6>Total (USD) <span class="float-end">$596</span></h6>\n                        </div>\n                    </div>\n                    <div class="row g-2">\n                        <div class="col pt-1">\n                            <a href="javascript:void(0);" class="btn btn-primary w-100 d-flex align-items-center justify-content-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                        </div>\n                        <div class="col pt-1">\n                            <a href="javascript:void(0);" class="btn btn-dark w-100 d-flex align-items-center justify-content-center"><i class="isax isax-document-download5 me-1"></i>Download</a>\n                        </div>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <!-- End Sales Analytics -->\n\n        <!-- Start Invoice Analytics -->\n        <div class="col-xl-4 col-lg-6 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body">\n                    <div class="mb-3">\n                        <h6 class="mb-1">Payment Statistics</h6>\n                    </div>\n                    <div class="mb-2">\n                        <div id="radial-chart2" class="chart-set">\n                            <apx-chart [series]="radialChart.series" \n                       [chart]="radialChart.chart"\n                       [dataLabels]="radialChart.dataLabels"\n                       [plotOptions]="radialChart.plotOptions"\n                       [yaxis]="radialChart.yaxis" \n                       [legend]="radialChart.legend" \n                       [fill]="radialChart.fill"\n                       [stroke]="radialChart.stroke" \n                       [xaxis]="radialChart.xaxis"\n                       [colors]="radialChart.colors"\n                       [labels]="radialChart.labels"\n                       [fill]="radialChart.fill"></apx-chart>\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center flex-wrap justify-content-center gap-2 mb-3">\n                        <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-square text-success fs-11 me-1"></i>Paid</p>\n                        <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-square text-primary fs-11 me-1"></i>Partially</p>\n                        <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-square text-warning fs-11 me-1"></i>Unpaid</p>\n                        <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-square text-pink fs-11 me-1"></i>Overdue</p>\n                    </div>\n                    <div class="border rounded p-2 mb-3">\n                        <div class="row g-2">\n                            <div class="col d-flex border-end">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Invoiced</p>\n                                    <h6 class="fs-16 fw-semibold">$9965</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex border-end">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Paid</p>\n                                    <h6 class="fs-16 fw-semibold">$996</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex border-end">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Partial</p>\n                                    <h6 class="fs-16 fw-semibold">$6562</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Unpaid</p>\n                                    <h6 class="fs-16 fw-semibold">$478</h6>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between pt-1 gap-3">\n                        <p class="mb-0">Updated from the last transaction on Sunday, 24 Mar 2025</p>\n                        <a href="javascript:void(0);" class="btn btn-md rounded-2 bg-light flex-shrink-0 fs-16 text-gray-9 border"><i class="isax isax-refresh fs-16"></i></a>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <!-- End Invoice Analytics -->\n\n        <!-- Start Recent Activities -->\n        <div class="col-xl-4 col-lg-6 d-flex">\n            <div class="card flex-fill overflow-hidden">\n                <div class="card-body pb-0">\n                    <div class="mb-0">\n                        <h6 class="mb-1 pb-3 mb-3 border-bottom">Recent Activities</h6>\n                        <div class="recent-activities">\n                            <div class="d-flex align-items-center pb-3">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1">Status Changed to <span class="text-gray-9 fw-semibold">Partially Paid</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>19 Jan 2025</p>\n                                </div>\n                            </div>\n                            <div class="d-flex align-items-center pb-3">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1"><span class="text-gray-9 fw-semibold">$300</span> Partial Amount Paid on <span class="text-gray-9 fw-semibold">Paypal</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>18 Jan 2025</p>\n                                </div>\n                            </div>\n                            <div class="d-flex align-items-center pb-3">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1">New Expenses added <span class="text-gray-9 fw-semibold">#TR018756</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>18 Jan 2025</p>\n                                </div>\n                            </div>\n                            <div class="d-flex align-items-center pb-3">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1">Estimate Created <span class="text-gray-9 fw-semibold">#ES458789</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>17 Jan 2025</p>\n                                </div>\n                            </div>\n                            <div class="d-flex align-items-center pb-0">\n                                <span class="border z-1 border-primary rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center bg-white p-1"><i class="fa fa-circle fs-8 text-primary"></i></span>\n                                <div class="recent-activities-flow">\n                                    <p class="mb-1"><span class="text-gray-9 fw-semibold">$147</span> Partial Amount Paid on <span class="text-gray-9 fw-semibold">Stripe</span></p>\n                                    <p class="mb-0 d-inline-flex align-items-center fs-13"><i class="isax isax-calendar-25 me-1"></i>17 Jan 2025</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div><!-- end card body -->\n                <a href="javascript:void(0);" class="btn w-100 fs-14 py-2 shadow-lg fw-medium">View All</a>\n            </div><!-- end card -->\n        </div>\n        <!-- End Recent Activities -->\n\n    </div>\n\n    <div class="row">\n\n        <!-- Start Recent Invoices -->\n        <div class="col-xl-8 d-flex">\n            <div class="card flex-fill w-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">\n                        <h6 class="mb-1">Recent Invoices</h6>\n                        <a [routerLink]="routes.customerInvoicereport" class="btn btn-sm btn-dark mb-1">View all Invoices</a>\n                    </div>\n                    <div class="table-responsive border recent-invoice-table table-nowrap">\n                        <table class="table m-0">\n                            <thead class="table-light">\n                                <tr>\n                                    <th>ID</th>\n                                    <th>Amount</th>\n                                    <th>Paid</th>\n                                    <th>Status</th>\n                                    <th>Payment Mode</th>\n                                    <th>Due Date</th>\n                                    <th></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00025</a>\n                                    </td>\n                                    <td class="text-dark">$10,000</td>\n                                    <td>$5,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Paid<i class="isax isax-tick-circle ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Cash</td>\n                                    <td>04 Mar 2025</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00024</a>\n                                    </td>\n                                    <td class="text-dark">$25,750</td>\n                                    <td>$10,750</td>\n                                    <td>\n                                        <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center">Unpaid<i class="isax isax-slash ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Check</td>\n                                    <td>20 Feb 2025</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-soft-info d-inline-flex align-items-center border-0 text-gray-3"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00023</a>\n                                    </td>\n                                    <td class="text-dark">$1,20,500</td>\n                                    <td>$60,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-danger badge-sm d-inline-flex align-items-center">Cancelled<i class="isax isax-close-circle ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Check</td>\n                                    <td>12 Nov 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00022</a>\n                                    </td>\n                                    <td class="text-dark">$7,50,300</td>\n                                    <td>$60,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Partially Paid<i class="isax isax-timer ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Check</td>\n                                    <td>25 Oct 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00016</a>\n                                    </td>\n                                    <td class="text-dark">$9,99,999</td>\n                                    <td>$4,00,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Partially Paid<i class="isax isax-timer ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Cash</td>\n                                    <td>18 Oct 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00015</a>\n                                    </td>\n                                    <td class="text-dark">$87,650</td>\n                                    <td>$40,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Paid<i class="isax isax-tick-circle ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Check</td>\n                                    <td>22 Sep 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-soft-info d-inline-flex align-items-center border-0 text-gray-3"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                                <tr class="border-white">\n                                    <td>\n                                        <a [routerLink]="routes.invoiceDetails" class="link-default">INV00014</a>\n                                    </td>\n                                    <td class="text-dark">$69,420</td>\n                                    <td>$30,000</td>\n                                    <td>\n                                        <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Partially Paid<i class="isax isax-timer ms-1"></i></span>\n                                    </td>\n                                    <td class="text-dark">Cash</td>\n                                    <td>15 Sep 2024</td>\n                                    <td>\n                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary d-inline-flex align-items-center"><i class="isax isax-money-send5 me-1"></i>Pay</a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <!-- End Recent Invoices -->\n\n        <!-- Start Recent Transactions -->\n        <div class="col-xl-4 d-flex">\n            <div class="card flex-fill w-100">\n                <div class="card-body">\n                    <div class="mb-0">\n                        <h6 class="mb-3">Recent Transactions</h6>\n                        <h6 class="fs-14 fw-semibold mb-3">Today</h6>\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg rounded-pill border bg-light p-2 flex-shrink-0"><img src="assets/img/icons/paypal-icon.svg" alt="img" class="img-fluid"></span>\n                                <div class="ms-2">\n                                    <h6 class="fs-14 fw-semibold mb-1">Andrew James</h6>\n                                    <p>#INV45478</p>\n                                </div>\n                            </div>\n                            <span class="badge badge-soft-success badge-lg d-inline-flex align-items-center">+ $989.15</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg rounded-pill border bg-light p-2 flex-shrink-0"><img src="assets/img/icons/card-icon.svg" alt="img" class="img-fluid"></span>\n                                <div class="ms-2">\n                                    <h6 class="fs-14 fw-semibold mb-1">John Carter</h6>\n                                    <p>#INV45477</p>\n                                </div>\n                            </div>\n                            <span class="badge badge-soft-danger badge-lg d-inline-flex align-items-center">- $300.12</span>\n                        </div>\n                        <h6 class="fs-14 fw-semibold mb-3">Yesterday</h6>\n                        <div class="d-flex align-items-center justify-content-between mb-3">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg rounded-pill border bg-light p-2 flex-shrink-0"><img src="assets/img/icons/card-icon.svg" alt="img" class="img-fluid"></span>\n                                <div class="ms-2">\n                                    <h6 class="fs-14 fw-semibold mb-1">Sophia White</h6>\n                                    <p>#INV45476</p>\n                                </div>\n                            </div>\n                            <span class="badge badge-soft-success badge-lg d-inline-flex align-items-center">+ $669</span>\n                        </div>\n                        <div class="d-flex align-items-center justify-content-between">\n                            <div class="d-flex align-items-center">\n                                <span class="avatar avatar-lg rounded-pill border bg-light p-2 flex-shrink-0"><img src="assets/img/icons/card-icon.svg" alt="img" class="img-fluid"></span>\n                                <div class="ms-2">\n                                    <h6 class="fs-14 fw-semibold mb-1">Daniel Martinez</h6>\n                                    <p>#INV45475</p>\n                                </div>\n                            </div>\n                            <span class="badge badge-soft-success badge-lg d-inline-flex align-items-center">+ $474.22</span>\n                        </div>\n                    </div>\n                </div><!-- end card body -->\n            </div><!-- end card -->\n        </div>\n        <!-- End Recent Transactions -->\n\n    </div>\n</div>\n<!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/customers/dashboard/dashboard.component.scss
var dashboard_component_default2;
var init_dashboard_component2 = __esm({
  "angular:jit:style:src/app/features/customers/dashboard/dashboard.component.scss"() {
    dashboard_component_default2 = "/* src/app/features/customers/dashboard/dashboard.component.scss */\n/*# sourceMappingURL=dashboard.component.css.map */\n";
  }
});

// src/app/features/customers/dashboard/dashboard.component.ts
var DashboardComponent;
var init_dashboard_component3 = __esm({
  "src/app/features/customers/dashboard/dashboard.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard_component();
    init_dashboard_component2();
    init_core();
    init_core_index();
    init_ng_apexcharts();
    init_common();
    init_slider();
    init_forms();
    init_router();
    init_date_range_picker_2_component();
    DashboardComponent = class DashboardComponent2 {
      routes = routes;
      chart;
      radialChart;
      constructor() {
        this.radialChart = {
          chart: {
            type: "donut",
            height: 164
          },
          series: [30, 10, 30, 30],
          labels: ["Total", "Total", "Total", "Total"],
          colors: ["#7539FF", "#E2B93B", "#27AE60", "#DD2590"],
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: false
            // No gap between segments
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                size: "70%",
                labels: {
                  show: true,
                  // ✅ Ensure donut center is always visible
                  name: {
                    show: true,
                    text: "Total",
                    fontSize: "13px",
                    offsetY: -4,
                    color: "#5D6772"
                  },
                  value: {
                    show: true,
                    fontSize: "18px",
                    fontWeight: 700,
                    offsetY: 10,
                    color: "#051321",
                    formatter: function() {
                      return "$3656";
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
      }
      static ctorParameters = () => [];
      static propDecorators = {
        chart: [{ type: ViewChild, args: ["chart"] }]
      };
    };
    DashboardComponent = __decorate([
      Component({
        selector: "app-dashboard",
        imports: [
          CommonModule,
          MatSliderModule,
          FormsModule,
          RouterLink,
          NgApexchartsModule,
          DateRangePicker2Component
        ],
        template: dashboard_component_default,
        styles: [dashboard_component_default2]
      })
    ], DashboardComponent);
  }
});

// src/app/features/customers/dashboard/dashboard.component.spec.ts
var require_dashboard_component_spec = __commonJS({
  "src/app/features/customers/dashboard/dashboard.component.spec.ts"(exports) {
    init_testing();
    init_dashboard_component3();
    describe("DashboardComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [DashboardComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dashboard_component_spec();
//# sourceMappingURL=spec-app-features-customers-dashboard-dashboard.component.spec.js.map
