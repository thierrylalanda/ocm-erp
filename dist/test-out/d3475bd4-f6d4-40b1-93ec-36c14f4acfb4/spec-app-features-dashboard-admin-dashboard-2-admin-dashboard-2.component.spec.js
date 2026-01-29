import {
  NgApexchartsModule,
  init_ng_apexcharts
} from "./chunk-PWEWZXBA.js";
import {
  MatSelectModule,
  init_select
} from "./chunk-PJP4EZYQ.js";
import "./chunk-ZLTBFUHR.js";
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
import "./chunk-46HFNSZZ.js";
import "./chunk-6XCX22WB.js";
import "./chunk-I2GXMQDC.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
import "./chunk-SR4JAI3W.js";
import "./chunk-2RBILSOV.js";
import {
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
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

// angular:jit:template:src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.html
var admin_dashboard_2_component_default;
var init_admin_dashboard_2_component = __esm({
  "angular:jit:template:src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.html"() {
    admin_dashboard_2_component_default = '\n<div class="">\n\n    <!-- Breadcrumb -->\n    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-4">\n        <div>\n            <h6>Dashboard</h6>\n        </div>\n        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n            <div class="dropdown me-1">\n                <a class="btn btn-primary d-flex align-items-center justify-content-center dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">\n                    Create New\n                </a>\n                <ul class="dropdown-menu dropdown-menu-start">\n                    <li>\n                        <a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-document-text-1 me-2"></i>Invoice\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-money-send me-2"></i>Expense\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-money-add me-2"></i>Credit Notes\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-money-recive me-2"></i>Debit Notes\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-document me-2"></i>Purchase Order\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-document-download me-2"></i>Quotation\n                        </a>\n                    </li>\n                    <li>\n                        <a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">\n                            <i class="isax isax-document-forward me-2"></i>Delivery Challan\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class="dropdown me-1">\n                <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">\n                    <i class="isax isax-export-1 me-1"></i>Export\n                </a>\n                <ul class="dropdown-menu">\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n                    </li>\n                    <li>\n                        <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n                    </li>\n                </ul>\n            </div>\n            \n            <app-date-range-picker></app-date-range-picker>\n        </div>\n    </div>\n    <!-- /Breadcrumb -->\n\n    <div class="row">\n\n        <!-- Amount -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n                        <div>\n                            <p class="mb-1">Amount Due</p>\n                            <h6 class="fs-16 fw-semibold">$25,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-primary text-white avatar-rounded">\n                            <i class="isax isax-receipt-item fs-16"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>5.62%</span> from last month</p>\n                </div>\n                <div class="position-absolute end-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/card-bg-04.svg" alt="img">\n                </div>\n            </div>\n        </div>\n        <!-- /Amount -->\n\n        <!-- Customers -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n                        <div>\n                            <p class="mb-1">Customers</p>\n                            <h6 class="fs-16 fw-semibold">18,500</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-success text-white avatar-rounded">\n                            <i class="isax isax-tick-circle fs-16"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>11.4%</span> from last month</p>\n                </div>\n                <div class="position-absolute end-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/card-bg-05.svg" alt="img">\n                </div>\n            </div>\n        </div>\n        <!-- /Customers -->\n\n        <!-- Invoices -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n                        <div>\n                            <p class="mb-1">Invoices</p>\n                            <h6 class="fs-16 fw-semibold">6,500</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-warning text-white avatar-rounded">\n                            <i class="isax isax-timer fs-16"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-success d-inline-flex align-items-center"><i class="isax isax-send me-1"></i>8.52%</span> from last month</p>\n                </div>\n                <div class="position-absolute end-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/card-bg-06.svg" alt="img">\n                </div>\n            </div>\n        </div>\n        <!-- /Invoices -->\n\n        <!-- Estimates -->\n        <div class="col-sm-6 col-xl-3 d-flex">\n            <div class="card overflow-hidden z-1 flex-fill">\n                <div class="card-body">\n                    <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n                        <div>\n                            <p class="mb-1">Estimates</p>\n                            <h6 class="fs-16 fw-semibold">2,000</h6>\n                        </div>\n                        <span class="avatar avatar-lg bg-danger text-white avatar-rounded">\n                            <i class="isax isax-information fs-16"></i>\n                        </span>\n                    </div>\n                    <p class="fs-13"><span class="text-danger d-inline-flex align-items-center"><i class="isax isax-received me-1"></i>7.45%</span> from last month</p>\n                </div>\n                <div class="position-absolute end-0 bottom-0 z-n1">\n                    <img src="assets/img/bg/card-bg-07.svg" alt="img">\n                </div>\n            </div>\n        </div>\n        <!-- /Estimates -->\n\n    </div>\n\n    <div class="row">\n\n        <!-- Sales Analytics -->\n        <div class="col-xl-8 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body pb-0">\n                    <div class="mb-3 d-flex align-items-center justify-content-between">\n                        <h6 class="mb-1">Sales Analytics</h6>\n                        <div class="select-sm mb-1">\n                            <mat-select class="custom-mat-select select" placeholder="Monthly">\n                                <mat-option value="1">Monthly</mat-option>\n                                <mat-option value="1">Weekly</mat-option>\n                                <mat-option value="1">Yearly</mat-option>\n                            </mat-select>\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n                        <div>\n                            <div class="d-flex align-items-center flex-wrap gap-3">\n                                <div>\n                                    <p class="fs-13 mb-1">Total Sales</p>\n                                    <h6 class="fs-16 fw-semibold text-primary">$1000</h6>\n                                </div>\n                                <div>\n                                    <p class="fs-13 mb-1">Receipts</p>\n                                    <h6 class="fs-16 fw-semibold text-success">$2100</h6>\n                                </div>\n                                <div>\n                                    <p class="fs-13 mb-1">Expenses</p>\n                                    <h6 class="fs-16 fw-semibold text-danger">$300</h6>\n                                </div>\n                                <div>\n                                    <p class="fs-13 mb-1">Earnings</p>\n                                    <h6 class="fs-16 fw-semibold">$700</h6>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="d-flex align-items-center gap-2">\n                            <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-circle text-info fs-12 me-1"></i>Received </p>\n                            <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-circle text-warning fs-12 me-1"></i>Pending</p>\n                        </div>\n                    </div>\n                    <div id="sales_analytics">\n                        <apx-chart [series]="salesChart.series" \n                       [labels]="salesChart.labels"\n                       [chart]="salesChart.chart"\n                       [dataLabels]="salesChart.dataLabels"\n                       [plotOptions]="salesChart.plotOptions"\n                       [yaxis]="salesChart.yaxis" \n                       [fill]="salesChart.fill"\n                       [tooltip]="salesChart.tooltip" \n                       [xaxis]="salesChart.xaxis"\n                       [colors]="salesChart.colors"\n                       [legend]="salesChart.legend"\n                       [grid]="salesChart.grid"\n                       [fill]="salesChart.fill"></apx-chart>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Sales Analytics -->\n\n        <!-- Invoice Analytics -->\n        <div class="col-xl-4 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body">\n                    <div class="mb-3 d-flex align-items-center justify-content-between">\n                        <h6 class="mb-1">Invoice Analytics</h6>\n                        <div class="select-sm mb-1">\n                            <mat-select class="custom-mat-select select" placeholder="Monthly">\n                                <mat-option value="1">Monthly</mat-option>\n                                <mat-option value="1">Weekly</mat-option>\n                                <mat-option value="1">Yearly</mat-option>\n                            </mat-select>\n                        </div>\n                    </div>\n                    <div id="invoice_analytics">\n                        <apx-chart [series]="invoiceChart.series" \n                        [labels]="invoiceChart.labels"\n                        [chart]="invoiceChart.chart"\n                        [dataLabels]="invoiceChart.dataLabels"\n                        [plotOptions]="invoiceChart.plotOptions"\n                        [yaxis]="invoiceChart.yaxis" \n                        [fill]="invoiceChart.fill"\n                        [tooltip]="invoiceChart.tooltip" \n                        [xaxis]="invoiceChart.xaxis"\n                        [colors]="invoiceChart.colors"\n                        [legend]="invoiceChart.legend"\n                        [grid]="invoiceChart.grid"\n                        [fill]="invoiceChart.fill"></apx-chart>\n                    </div>\n                    <div class="d-flex align-items-center justify-content-center gap-3 mb-3">\n                        <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-square text-primary fs-12 me-1"></i>Invoiced </p>\n                        <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-square text-success fs-12 me-1"></i>Received</p>\n                        <p class="fs-13 text-title d-flex align-items-center mb-0"><i class="fa-solid fa-square text-warning fs-12 me-1"></i>Pending</p>\n                    </div>\n                    <div class="border rounded p-2">\n                        <div class="row g-2">\n                            <div class="col d-flex border-end ">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Invoiced</p>\n                                    <h6 class="fs-16 fw-semibold">$9965</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex border-end ">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Received</p>\n                                    <h6 class="fs-16 fw-semibold">$996</h6>\n                                </div>\n                            </div>\n                            <div class="col d-flex">\n                                <div class="text-center flex-fill">\n                                    <p class="fs-13 mb-1">Pending</p>\n                                    <h6 class="fs-16 fw-semibold">$478</h6>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /Invoice Analytics -->\n\n    </div>\n\n   <!-- Start row -->\n   <div class="row">\n\n    <!-- Start Recent Invoices -->\n    <div class="col-lg-6">\n        <div class="card">\n            <div class="card-body">\n                <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">\n                    <h6 class="mb-1">Recent Invoices</h6>\n                    <a [routerLink]="routes.invoiceList" class="btn btn-sm btn-dark mb-1">View all</a>\n                </div>\n                <div class="table-responsive border table-nowrap">\n                    <table class="table m-0">\n                        <thead>\n                            <tr>\n                                <th>Customer</th>\n                                <th>Amount</th>\n                                <th>Due Date</th>\n                                <th>Status</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-25.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Emily Clark</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$10,000</td>\n                                <td>04 Mar 2025</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Paid<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-19.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">John Carter</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$25,750</td>\n                                <td>20 Feb 2025</td>\n                                <td>\n                                    <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center">Partially Paid<i class="isax isax-slash ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-16.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Sophia White</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$1,20,500</td>\n                                <td>12 Nov 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-danger badge-sm d-inline-flex align-items-center">Overdue<i class="isax isax-close-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-08.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Michael Johnson</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$7,50,300</td>\n                                <td>25 Oct 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-15.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Daniel Martinez</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$9,99,999</td>\n                                <td>18 Oct 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-39.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Charlotte Brown</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$87,650</td>\n                                <td>22 Sep 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Paid<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-21.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">William Parker</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class="text-dark">$69,420</td>\n                                <td>15 Sep 2024</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div><!-- End card body -->\n        </div><!-- End card -->\n    </div><!-- End col -->\n    <!-- End Recent Invoices -->\n\n    <!-- Start Recent Estimates -->\n    <div class="col-lg-6">\n        <div class="card">\n            <div class="card-body">\n                <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">\n                    <h6 class="mb-1">Recent Estimates</h6>\n                    <a [routerLink]="routes.quotationList" class="btn btn-sm btn-dark mb-1">View all</a>\n                </div>\n                <div class="table-responsive border table-nowrap">\n                    <table class="table m-0">\n                        <thead>\n                            <tr>\n                                <th>Customer</th>\n                                <th>Expiry Date</th>\n                                <th>Amount</th>\n                                <th>Status</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Olivia Harris</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>10 Mar 2020</td>\n                                <td class="text-dark">$24,050</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-05.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">David Anderson</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>26 Feb 2025</td>\n                                <td class="text-dark">$16,362</td>\n                                <td>\n                                    <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center">Expired<i class="isax isax-slash ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-38.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Emma Lewis</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>18 Nov 2024</td>\n                                <td class="text-dark">$1,45,355</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-03.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Robert Thomas</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>31 Oct 2024</td>\n                                <td class="text-dark">$35,000</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-24.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Isabella Scott</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>24 Oct 2024</td>\n                                <td class="text-dark">$99,999</td>\n                                <td>\n                                    <span class="badge badge-soft-warning badge-sm d-inline-flex align-items-center">Expired<i class="isax isax-slash ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Mia Thompson</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>28 Sep 2024</td>\n                                <td class="text-dark">$1,27,900</td>\n                                <td>\n                                    <span class="badge badge-soft-info badge-sm d-inline-flex align-items-center">Sent<i class="isax isax-timer ms-1"></i></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class="d-flex align-items-center">\n                                        <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                                            <img src="assets/img/users/user-06.jpg" class="rounded-circle" alt="img">\n                                        </a>\n                                        <div>\n                                            <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">Amelia Robinson</a></h6>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td>21 Sep 2024</td>\n                                <td class="text-dark">$39,280</td>\n                                <td>\n                                    <span class="badge badge-soft-success badge-sm d-inline-flex align-items-center">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div><!-- End card body -->\n        </div><!-- End card -->\n    </div><!-- End col -->\n    <!-- End Recent Estimates -->\n\n</div>\n<!-- End row -->\n</div>\n\n\n\n\n';
  }
});

// angular:jit:style:src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.scss
var admin_dashboard_2_component_default2;
var init_admin_dashboard_2_component2 = __esm({
  "angular:jit:style:src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.scss"() {
    admin_dashboard_2_component_default2 = "/* src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.scss */\n/*# sourceMappingURL=admin-dashboard-2.component.css.map */\n";
  }
});

// src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.ts
var AdminDashboard2Component;
var init_admin_dashboard_2_component3 = __esm({
  "src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_admin_dashboard_2_component();
    init_admin_dashboard_2_component2();
    init_core();
    init_core_index();
    init_ng_apexcharts();
    init_common();
    init_router();
    init_date_range_picker_component();
    init_select();
    AdminDashboard2Component = class AdminDashboard2Component2 {
      routes = routes;
      chart;
      salesChart;
      invoiceChart;
      constructor() {
        this.salesChart = {
          chart: {
            height: 300,
            type: "bar",
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          label: {
            show: false
          },
          colors: ["#2F80ED", "#E2B93B"],
          series: [{
            name: "Received ",
            data: [80, 100, 50, 50, 80, 60, 100, 60, 40, 55, 30, 70]
          }, {
            name: "Pending ",
            data: [40, 60, 60, 60, 20, 80, 40, 20, 50, 70, 40, 60]
          }],
          grid: {
            borderColor: "#E2E4E6",
            strokeDashArray: 5,
            padding: {
              right: -10,
              left: 0
            }
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          },
          yaxis: {
            min: 0,
            max: 100,
            labels: {
              offsetX: -15,
              formatter: (val) => {
                return "$" + val / 1;
              }
            }
          },
          fill: {
            opacity: 1
          }
        };
        this.invoiceChart = {
          series: [40, 35, 25],
          // Percentages for each section
          chart: {
            type: "donut",
            height: 240
          },
          labels: ["Invoiced", "Received", "Pending"],
          // Labels for the data
          colors: ["#2F80ED", "#27AE60", "#E2B93B"],
          // Colors from the image
          plotOptions: {
            pie: {
              donut: {
                size: "70%",
                labels: {
                  show: false,
                  total: {
                    show: true,
                    label: "Leads",
                    formatter: function(w) {
                      return "589";
                    }
                  }
                }
              }
            }
          },
          dataLabels: {
            enabled: true
          },
          legend: {
            show: true,
            position: "bottom"
          },
          label: {
            show: false
          }
        };
      }
      static ctorParameters = () => [];
      static propDecorators = {
        chart: [{ type: ViewChild, args: ["chart"] }]
      };
    };
    AdminDashboard2Component = __decorate([
      Component({
        selector: "app-admin-dashboard-2",
        template: admin_dashboard_2_component_default,
        imports: [CommonModule, NgApexchartsModule, RouterLink, DateRangePickerComponent, MatSelectModule],
        styles: [admin_dashboard_2_component_default2]
      })
    ], AdminDashboard2Component);
  }
});

// src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.spec.ts
var require_admin_dashboard_2_component_spec = __commonJS({
  "src/app/features/dashboard/admin-dashboard-2/admin-dashboard-2.component.spec.ts"(exports) {
    init_testing();
    init_admin_dashboard_2_component3();
    describe("AdminDashboard2Component", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [AdminDashboard2Component]
        }).compileComponents();
        fixture = TestBed.createComponent(AdminDashboard2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_admin_dashboard_2_component_spec();
//# sourceMappingURL=spec-app-features-dashboard-admin-dashboard-2-admin-dashboard-2.component.spec.js.map
