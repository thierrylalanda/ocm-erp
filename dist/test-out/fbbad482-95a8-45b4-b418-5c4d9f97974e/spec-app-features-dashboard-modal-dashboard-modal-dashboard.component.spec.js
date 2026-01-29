import {
  Chart,
  init_chart,
  registerables
} from "./chunk-G2YEAOLU.js";
import {
  NgApexchartsModule,
  init_ng_apexcharts
} from "./chunk-PWEWZXBA.js";
import {
  DateRangePickerComponent,
  init_date_range_picker_component
} from "./chunk-ASDSEI3A.js";
import "./chunk-WSBEZP5X.js";
import "./chunk-SR4JAI3W.js";
import {
  SettingsService,
  init_settings_service
} from "./chunk-HBVQWAFR.js";
import "./chunk-2RBILSOV.js";
import {
  init_core_index,
  routes
} from "./chunk-SDAHDEJE.js";
import {
  CommonService
} from "./chunk-2O5UQ647.js";
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

// angular:jit:template:src/app/features/dashboard/modal-dashboard/modal-dashboard.component.html
var modal_dashboard_component_default;
var init_modal_dashboard_component = __esm({
  "angular:jit:template:src/app/features/dashboard/modal-dashboard/modal-dashboard.component.html"() {
    modal_dashboard_component_default = '\n\n  <!-- Start Breadcrumb -->\n  <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-4">\n    <div>\n      <h6>Dashboard</h6>\n    </div>\n    <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n      <app-date-range-picker/>\n      <div class="dropdown me-1">\n        <a class="btn btn-primary d-flex align-items-center justify-content-center dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">\n          Create New\n        </a>\n        <ul class="dropdown-menu dropdown-menu-start">\n          <li>\n            <a [routerLink]="routes.addInvoice" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-document-text-1 me-2"></i>Invoice\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.expenses" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-money-send me-2"></i>Expense\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addCreditNotes" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-money-add me-2"></i>Credit Notes\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addDebitNotes" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-money-recive me-2"></i>Debit Notes\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addPurchaseOrder" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-document me-2"></i>Purchase Order\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addQuotations" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-document-download me-2"></i>Quotation\n            </a>\n          </li>\n          <li>\n            <a [routerLink]="routes.addDeliveryChallan" class="dropdown-item d-flex align-items-center">\n              <i class="isax isax-document-forward me-2"></i>Delivery Challan\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class="dropdown">\n        <a href="javascript:void(0);" class="btn btn-outline-white d-inline-flex align-items-center"  data-bs-toggle="dropdown">\n          <i class="isax isax-export-1 me-1"></i>Export\n        </a>\n        <ul class="dropdown-menu">\n          <li>\n            <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>\n          </li>\n          <li>\n            <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <!-- End Breadcrumb -->\n\n  <!-- Start row -->\n  <div class="bg-primary rounded welcome-wrap position-relative mb-4">\n    <div class="row">\n      <div class="col-lg-8 col-md-9 col-sm-7">\n        <div>\n          <h5 class="text-white mb-1">Good Morning, Jafna Cremson</h5>\n          <p class="text-white mb-3">You have 15+ invoices saved to draft that has to send to customers</p>\n          <div class="d-flex align-items-center flex-wrap gap-3">\n            <p class="d-flex align-items-center fs-13 text-white mb-0"><i class="isax isax-calendar5 me-1"></i>Friday, 24 Mar 2025</p>\n            <p class="d-flex align-items-center fs-13 text-white mb-0"><i class="isax isax-clock5 me-1"></i>11:24 AM</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class="position-absolute end-0 top-50 translate-middle-y p-2 d-none d-sm-block">\n      <img src="assets/img/icons/dashboard.svg" alt="img">\n    </div>\n  </div>\n  <!-- End row -->\n\n  <!-- Start row -->\n  <div class="row">\n\n    <div class="col-md-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="d-flex align-items-center mb-1"><i class="isax isax-category5 text-default me-2"></i>Overview</h6>\n          </div>\n          <div class="row g-4">\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-primary-subtle text-primary flex-shrink-0 me-2">\n                  <i class="isax isax-document-text-1 fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Invoices</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">1,041</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-success-subtle text-success-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-profile-2user fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Customers</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">3,462</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-warning-subtle text-warning-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-dcube fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Amount Due</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$1,642</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-info-subtle text-info-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-document-text fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Quotations</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">2,150</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="d-flex align-items-center mb-1"><i class="isax isax-chart-215 text-default me-2"></i>Sales Analytics</h6>\n          </div>\n          <div class="row g-4">\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-primary-subtle text-primary flex-shrink-0 me-2">\n                  <i class="isax isax-document-forward fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Total Sales</p>\n                  <h6 class="fs-16 fw-semibold mb-0">$40,569</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-success-subtle text-success-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-programming-arrow fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Purchase</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$1,54,220</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-warning-subtle text-warning-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-dollar-circle fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 mb-0">Expenses</p>\n                  <h6 class="fs-16 fw-semibold text-truncate">$10,041</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-info-subtle text-info-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-flag fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Credits</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$12,150</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="d-flex align-items-center mb-1"><i class="isax isax-chart-success5 text-default me-2"></i>Invoice Statistics</h6>\n          </div>\n          <div class="row g-4">\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-primary-subtle text-primary flex-shrink-0 me-2">\n                  <i class="isax isax-document fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Invoiced</p>\n                  <h6 class="fs-16 fw-semibold mb-0">$21,132</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-success-subtle text-success-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-document-forward fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Received</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$10,763</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center">\n                <span class="avatar avatar-44 avatar-rounded bg-warning-subtle text-warning-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-document-previous fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Outstanding</p>\n                  <h6 class="fs-16 fw-semibold mb-0 text-truncate">$8041</h6>\n                </div>\n              </div>\n            </div>\n            <div class="col-xl-6">\n              <div class="d-flex align-items-center me-2">\n                <span class="avatar avatar-44 avatar-rounded bg-info-subtle text-info-emphasis flex-shrink-0 me-2">\n                  <i class="isax isax-dislike fs-20"></i>\n                </span>\n                <div>\n                  <p class="mb-1 text-truncate">Overdue</p>\n                  <h6 class="fs-16 fw-semibold text-truncate mb-0">$41,811.2</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n  </div>\n  <!-- End row -->\n\n  <!-- Start row -->\n  <div class="row">\n\n    <div class="col-md-6 col-xl-4 d-flex flex-column">\n\n      <div class="card overflow-hidden z-1 flex-fill">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n            <div>										\n              <p class="mb-1">Total Products</p>\n              <div class="d-flex align-items-center">\n                <h6 class="fs-16 fw-semibold me-2">897</h6>\n                <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>\n              </div>\n            </div>\n            <span class="avatar avatar-lg bg-light text-dark avatar-rounded">\n              <i class="isax isax-document-text fs-16"></i>\n            </span>\n          </div>\n          <a [routerLink]="routes.allInventory" class="fw-medium text-decoration-underline">View Inventory</a>\n        </div> <!-- end card body -->\n        <div class="position-absolute end-0 bottom-0 z-n1">\n          <img src="assets/img/bg/card-bg-01.svg" alt="img">\n        </div>\n      </div> <!-- end card -->\n\n      <div class="card overflow-hidden z-1 flex-fill">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n            <div>										\n              <p class="mb-1">Total Sales</p>\n              <div class="d-flex align-items-center">\n                <h6 class="fs-16 fw-semibold me-2">645</h6>\n                <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>\n              </div>\n            </div>\n            <span class="avatar avatar-lg bg-light text-dark avatar-rounded">\n              <i class="isax isax-document-text fs-16"></i>\n            </span>\n          </div>\n          <a [routerLink]="routes.invoiceList" class="fw-medium text-decoration-underline">View Invoices</a>\n        </div> <!-- end card body -->\n        <div class="position-absolute end-0 bottom-0 z-n1">\n          <img src="assets/img/bg/card-bg-02.svg" alt="img">\n        </div>\n      </div> <!-- end card -->\n\n      <div class="card overflow-hidden z-1 flex-fill">\n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">\n            <div>										\n              <p class="mb-1">Total Quotations</p>\n              <div class="d-flex align-items-center">\n                <h6 class="fs-16 fw-semibold me-2">128</h6>\n                <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>\n              </div>\n            </div>\n            <span class="avatar avatar-lg bg-light text-dark avatar-rounded">\n              <i class="isax isax-document-text fs-16"></i>\n            </span>\n          </div>\n          <a [routerLink]="routes.quotations" class="fw-medium text-decoration-underline">View All</a>\n        </div> <!-- end card body -->\n        <div class="position-absolute end-0 bottom-0 z-n1">\n          <img src="assets/img/bg/card-bg-03.svg" alt="img">\n        </div>\n      </div> <!-- end card -->\n\n    </div> <!-- end col -->\n\n    <div class="col-md-6 col-xl-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body pb-0">\n          <div class="mb-3">\n            <h6 class="mb-1">Revenue</h6>\n          </div>\n          <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">\n            <div>\n              <p class="mb-1">Total Revenue</p>\n              <div class="d-flex align-items-center">\n                <h6 class="fs-16 fw-semibold me-2">897</h6>\n                <span class="badge badge-sm badge-soft-success">+45<i class="isax isax-arrow-up-15 ms-1"></i></span>\n              </div>\n            </div>\n            <div class="d-flex align-items-center gap-2">\n              <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-circle text-primary-transparent fs-12 me-1"></i>Received </p>\n              <p class="fs-13 text-dark d-flex align-items-center mb-0"><i class="fa-solid fa-circle text-primary fs-12 me-1"></i>Outstanding</p>\n            </div>\n          </div>\n          <div id="revenue_chart">\n            <apx-chart [series]="revenueChart.series" \n                       [chart]="revenueChart.chart"\n                       [dataLabels]="revenueChart.dataLabels"\n                       [plotOptions]="revenueChart.plotOptions"\n                       [yaxis]="revenueChart.yaxis" \n                       [legend]="revenueChart.legend" \n                       [fill]="revenueChart.fill"\n                       [stroke]="revenueChart.stroke" \n                       [tooltip]="revenueChart.tooltip" \n                       [xaxis]="revenueChart.xaxis"\n                       [colors]="revenueChart.colors"\n                       [fill]="revenueChart.fill"></apx-chart>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-xl-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="mb-1">Customers</h6>\n          </div>\n          <div class="table-responsive">\n            <table class="table table-nowrap table-borderless custom-table">\n              <tbody>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-06.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>\n                        <p class="fs-13">No of Invoices : 45</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$3589</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-01.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">John Smith</a></h6>\n                        <p class="fs-13">No of Invoices : 16</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$5426</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-38.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">Olivia Harris</a></h6>\n                        <p class="fs-13">No of Invoices : 23</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$1493</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-12.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">William Parker</a></h6>\n                        <p class="fs-13">No of Invoices : 58</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$7854</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-lg rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-02.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-1"><a [routerLink]="routes.customerDetails">Charlotte Brown</a></h6>\n                        <p class="fs-13">No of Invoices : 09</p>\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <p class="mb-1">Outstanding </p>\n                    <h6 class="fs-14 fw-semibold">$4989</h6>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center justify-content-end gap-2">\n                      <a [routerLink]="routes.addInvoice" class="btn btn-icon btn-sm btn-light" data-bs-toggle="tooltip" data-bs-title="New Invoice"><i class="isax isax-add-circle"></i></a>\n                      <div data-bs-toggle="tooltip" data-bs-title="Add Ledger">\n                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"  data-bs-toggle="modal" data-bs-target="#add_ledger"><i class="isax isax-document-text-1"></i></a>															\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <a [routerLink]="routes.customerList" class="btn btn-light btn-lg w-100 text-decoration-underline mt-3">All Customers</a>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n  </div>\n  <!-- End row -->\n\n  <!-- Start row -->\n  <div class="row">\n    <div class="col-md-12">\n      <div class="card"> \n        <div class="card-body">\n          <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">\n            <h6 class="mb-1">Invoices</h6>\n            <a [routerLink]="routes.invoiceList" class="btn btn-primary mb-1">View all Invoices</a>\n          </div>\n          <div class="table-responsive no-filter no-pagination">\n            <table class="table table-nowrap border datatable">\n              <thead>\n                <tr>\n                  <th class="position-relative overflow-hidden">ID</th>\n                  <th class="position-relative overflow-hidden">Customer</th>\n                  <th class="position-relative overflow-hidden">Created On</th>\n                  <th class="position-relative overflow-hidden">Amount</th>\n                  <th class="position-relative overflow-hidden">Paid</th>\n                  <th class="position-relative overflow-hidden">Payment Mode</th>\n                  <th class="position-relative overflow-hidden">Due Date</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00025</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>22 Feb 2025</td>\n                  <td class="text-dark">$10,000</td>\n                  <td>$5,000</td>\n                  <td class="text-dark">Cash</td>	\n                  <td>04 Mar 2025</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00024</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-07.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">John Carter</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>07 Feb 2025</td>\n                  <td class="text-dark">$25,750</td>\n                  <td>$5,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>20 Feb 2025</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00023</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-16.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Sophia White</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>09 Dec 2024</td>\n                  <td class="text-dark">$1,20,500</td>\n                  <td>$60,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>12 Nov 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00022</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-08.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Michael Johnson</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>30 Nov 2024</td>\n                  <td class="text-dark">$7,50,300</td>\n                  <td>$60,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>25 Oct 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00016</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-15.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Daniel Martinez</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>12 Oct 2024</td>\n                  <td class="text-dark">$9,99,999</td>\n                  <td>$4,00,000</td>\n                  <td class="text-dark">Cash</td>\n                  <td>18 Oct 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00015</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-27.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Charlotte Brown</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>05 Oct 2024</td>\n                  <td class="text-dark">$87,650</td>\n                  <td>$40,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>22 Sep 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00014</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-14.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">William Parker</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>09 Sep 2024</td>\n                  <td class="text-dark">$69,420</td>\n                  <td>$30,000</td>\n                  <td class="text-dark">Cash</td>\n                  <td>15 Sep 2024</td>\n                </tr>\n                <tr>\n                  <td>\n                    <a [routerLink]="routes.invoiceDetails" class="link-default">INV00013</a>\n                  </td>\n                  <td>\n                    <div class="d-flex align-items-center">\n                      <a [routerLink]="routes.customerDetails" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">\n                        <img src="assets/img/users/user-25.jpg" class="rounded-circle" alt="img">\n                      </a>\n                      <div>\n                        <h6 class="fs-14 fw-medium mb-0"><a [routerLink]="routes.customerDetails">Mia Thompson</a></h6>\n                      </div>\n                    </div>\n                  </td>\n                  <td>02 Sep 2024</td>\n                  <td class="text-dark">$33,210</td>\n                  <td>$15,000</td>\n                  <td class="text-dark">Check</td>\n                  <td>20 Aug 2024</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n  </div>\n  <!-- End row -->\n\n  <!-- Start row -->\n  <div class="row">\n\n    <div class="col-lg-12 col-xl-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body pb-1">\n          <div class="mb-3">\n            <h6 class="mb-1">Recent Transactions</h6>\n          </div>\n          <h6 class="fs-14 fw-semibold mb-3">Today</h6>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-01.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Andrew James</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45478</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-success">+ $989.15</span>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-02.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">John Carter</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45477</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-danger">- $300.12</span>\n            </div>\n          </div>\n          <hr>\n          <h6 class="fs-14 fw-semibold mb-3">Yesterday</h6>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-02.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Sophia White</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45476</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-success"> + $669</span>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-02.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Daniel Martinez</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45475</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-success"> + $474.22</span>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between mb-3">\n            <div class="d-flex align-items-center">\n              <a href="javascript:void(0);" class="avatar avatar-md flex-shrink-0 me-2">\n                <img src="assets/img/icons/transaction-01.svg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a href="javascript:void(0);">Amelia Robinson</a></h6>\n                <p class="fs-13"><a [routerLink]="routes.invoiceDetails" class="link-default">#INV45474</a></p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-lg badge-soft-success"> + $339.79</span>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-6 col-xl-4 d-flex">\n      <div class="card flex-fill">\n        <div class="card-body">\n          <div class="mb-3">\n            <h6 class="mb-1">Quotations</h6>\n          </div>\n          <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-02.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>\n                <p class="fs-13">QU0014</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center mb-1">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n              <p class="fs-13">25 Mar 2025</p>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-07.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">David Anderson</a></h6>\n                <p class="fs-13">QU0147</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-info d-inline-flex align-items-center mb-1">Sent<i class="isax isax-arrow-right-24 ms-1"></i></span>\n              <p class="fs-13">12 Feb 2025</p>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-16.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Sophia White</a></h6>\n                <p class="fs-13">QU1947</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-light d-inline-flex align-items-center text-dark mb-1">Expired<i class="isax isax-timer-pause ms-1"></i></span>\n              <p class="fs-13">08 Mar 2025</p>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-08.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Michael Johnson</a></h6>\n                <p class="fs-13">QU2842</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-danger d-inline-flex align-items-center mb-1">Declined<i class="isax isax-close-circle ms-1"></i></span>\n              <p class="fs-13">31 Jan 2025</p>\n            </div>\n          </div>\n          <div class="d-flex align-items-center justify-content-between">\n            <div class="d-flex align-items-center">\n              <a [routerLink]="routes.customerDetails" class="avatar avatar-lg flex-shrink-0 me-2">\n                <img src="assets/img/users/user-22.jpg" class="rounded-circle" alt="img">\n              </a>\n              <div>\n                <h6 class="fs-14 fw-semibold mb-1"><a [routerLink]="routes.customerDetails">Emily Clark</a></h6>\n                <p class="fs-13">QU7868</p>\n              </div>\n            </div>\n            <div class="text-end">\n              <span class="badge badge-sm badge-soft-success d-inline-flex align-items-center mb-1">Accepted<i class="isax isax-tick-circle ms-1"></i></span>\n              <p class="fs-13">18 Jan 2025</p>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n    <div class="col-md-6 col-xl-4 d-flex flex-column">\n      <div class="card d-flex">\n        <div class="card-body flex-fill">\n          <div class="d-flex align-items-center justify-content-between">\n            <div>\n              <p class="mb-1">Total Income on Invoice</p>\n              <h6 class="fs-16 fw-semibold">$98,545</h6>\n            </div>\n            <div>\n              <h6 class="fs-14 fw-semibold mb-1">30.2 <i class="isax isax-arrow-circle-up4 text-success"></i></h6>\n              <p class="fs-13">Vs Last Week</p>\n            </div>\n          </div>\n        </div> <!-- end card body -->\n        <div id="invoice_income">\n          <apx-chart [series]="invoiceIncome.series" \n                       [chart]="invoiceIncome.chart"\n                       [dataLabels]="invoiceIncome.dataLabels"\n                       [plotOptions]="invoiceIncome.plotOptions"\n                       [yaxis]="invoiceIncome.yaxis" \n                       [fill]="invoiceIncome.fill"\n                       [tooltip]="invoiceIncome.tooltip" \n                       [xaxis]="invoiceIncome.xaxis"\n                       [colors]="invoiceIncome.colors"\n                       [grid]="invoiceIncome.grid"\n                       [fill]="invoiceIncome.fill"></apx-chart>\n        </div>\n      </div> <!-- end card -->\n      <div class="card d-flex">\n        <div class="card-body flex-fill">\n          <h6 class="mb-3">Top Sales Statistics</h6>\n          <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">\n            <p class="d-flex align-items-center fs-13 text-dark mb-0"><i class="fa-solid fa-circle fs-8 me-1 text-pink"></i>Dell XPS 13</p>\n            <p class="d-flex align-items-center fs-13 text-dark mb-0"><i class="fa-solid fa-circle fs-8 me-1 text-secondary"></i>Nike T-shirt</p>\n            <p class="d-flex align-items-center fs-13 text-dark mb-0"><i class="fa-solid fa-circle fs-8 me-1 text-success"></i>Apple iPhone 15</p>\n          </div>								\n          <div id="total_sales">\n            <apx-chart [series]="salesChart.series" \n                       [labels]="salesChart.labels"\n                       [chart]="salesChart.chart"\n                       [dataLabels]="salesChart.dataLabels"\n                       [plotOptions]="salesChart.plotOptions"\n                       [yaxis]="salesChart.yaxis" \n                       [fill]="salesChart.fill"\n                       [tooltip]="salesChart.tooltip" \n                       [xaxis]="salesChart.xaxis"\n                       [colors]="salesChart.colors"\n                       [legend]="salesChart.legend"\n                       [grid]="salesChart.grid"\n                       [fill]="salesChart.fill"></apx-chart>\n          </div>\n        </div> <!-- end card body -->\n      </div> <!-- end card -->\n    </div> <!-- end col -->\n\n  </div>\n  <!-- End row -->\n\n\n  		<!-- Start Add Ledger  -->\n      <div id="add_ledger" class="modal fade">\n        <div class="modal-dialog modal-dialog-centered">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h4 class="modal-title">Add New Ledger</h4>\n              <button type="button" class="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>\n            </div>\n            <form>\n              <div class="modal-body pb-1">\n                <div class="mb-3">\n                  <label class="form-label">Amount</label>\n                  <input type="text" class="form-control">\n                </div>\n                <div class="mb-3">\n                  <label class="form-label">Date</label>\n                  <div class="input-group position-relative ngxdate">\n                    <input type="text" class="form-control datetimepicker rounded-end" bsDatepicker container=".ngxdate" placeholder="dd/mm/yyyy">\n                    <span class="input-icon-addon fs-16 text-gray-9">\n                      <i class="isax isax-calendar-2"></i>\n                    </span>\n                  </div>\n                </div>\n                <div class="mb-3">\n                  <label class="form-label">Mode</label>\n                  <div class="d-flex align-items-center">\n                    <div class="form-check me-3">\n                      <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-1">\n                      <label class="form-check-label" for="Radio-sm-1">\n                        Credit\n                      </label>\n                    </div>\n                    <div class="form-check">\n                      <input class="form-check-input" type="radio" name="Radio" id="Radio-sm-2" checked="">\n                      <label class="form-check-label" for="Radio-sm-2">\n                        Debit\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="modal-footer d-flex align-items-center justify-content-between gap-1">\n                <button type="button" class="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>\n                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Create</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!-- End Add Ledger -->';
  }
});

// angular:jit:style:src/app/features/dashboard/modal-dashboard/modal-dashboard.component.scss
var modal_dashboard_component_default2;
var init_modal_dashboard_component2 = __esm({
  "angular:jit:style:src/app/features/dashboard/modal-dashboard/modal-dashboard.component.scss"() {
    modal_dashboard_component_default2 = "/* src/app/features/dashboard/modal-dashboard/modal-dashboard.component.scss */\n/*# sourceMappingURL=modal-dashboard.component.css.map */\n";
  }
});

// src/app/features/dashboard/modal-dashboard/modal-dashboard.component.ts
var ModalDashboardComponent;
var init_modal_dashboard_component3 = __esm({
  "src/app/features/dashboard/modal-dashboard/modal-dashboard.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_modal_dashboard_component();
    init_modal_dashboard_component2();
    init_core();
    init_chart();
    init_core_index();
    init_settings_service();
    init_ng_apexcharts();
    init_common();
    init_router();
    init_date_range_picker_component();
    Chart.register(...registerables);
    ModalDashboardComponent = class ModalDashboardComponent2 {
      common;
      layout;
      routes = routes;
      base = "";
      chart;
      revenueChart;
      invoiceIncome;
      salesChart;
      constructor(common, layout) {
        this.common = common;
        this.layout = layout;
        this.common.baseRoute.subscribe((res) => {
          this.base = res;
          if (this.base === "layout-single") {
            layout.changeLayoutMode("single");
          } else if (this.base === "layout-default") {
            layout.changeLayoutMode("default");
          } else if (this.base === "layout-mini") {
            layout.changeLayoutMode("mini");
          } else if (this.base === "layout-transparent") {
            layout.changeLayoutMode("transparent");
          } else if (this.base === "layout-without-header") {
            layout.changeLayoutMode("without-header");
          } else if (this.base === "layout-rtl") {
            layout.changeLayoutMode("rtl");
          } else if (this.base === "layout-boxed") {
            layout.changeLayoutWidth("box");
          } else if (this.base === "layout-dark") {
            layout.changeThemeColor("dark");
          } else {
          }
        });
        this.revenueChart = {
          chart: {
            height: 360,
            type: "bar",
            stacked: true,
            toolbar: {
              show: false
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {}
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 5,
              borderRadiusWhenStacked: "all",
              endingShape: "rounded"
            }
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#7539FF", "#F8F5FF"],
          series: [{
            name: "Outstanding",
            data: [0, 10, 30, 50, 25, 38, 40]
          }, {
            name: "Received ",
            data: [30, 30, 80, 70, 80, 80, 80]
          }],
          grid: {
            borderColor: "#E2E4E6",
            strokeDashArray: 5,
            padding: {
              right: -10,
              left: -10
            }
          },
          xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yaxis: {
            min: 0,
            max: 100,
            labels: { show: false }
          },
          fill: {
            opacity: 1
          }
        };
        this.invoiceIncome = {
          chart: {
            height: 60,
            type: "area",
            background: "#ffffff",
            toolbar: {
              show: false
            }
          },
          colors: ["#27AE60"],
          fill: {
            type: "solid",
            opacity: 0
            // Ensure solid fill
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          series: [{
            name: "Income",
            data: [30, 35, 45, 40, 55, 45, 56, 53, 68, 63, 70, 80]
          }],
          grid: {
            show: false,
            // Set false to hide all grid lines
            padding: { left: -10, right: -10, top: -30, bottom: -28 }
          },
          yaxis: {
            min: 0,
            max: 80,
            labels: { show: false }
            // Hides Y-axis values
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: { show: false }
          }
        };
        this.salesChart = {
          series: [35, 40, 25],
          // Percentages for each section
          chart: {
            type: "donut",
            height: 300
          },
          labels: ["Dell XPS 13", "Nike T-shirt", "Apple iPhone 15"],
          // Labels for the data
          colors: ["#F38BBB", "#5297FE", "#7DCEA0"],
          // Colors from the image
          plotOptions: {
            pie: {
              startAngle: -110,
              // Start from the top
              endAngle: 110,
              // End at the bottom
              donut: {
                size: "60%",
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
            enabled: false
          },
          legend: {
            show: false
          },
          label: {
            show: false
          }
        };
      }
      ngOnDestroy() {
        this.layout.layoutMode.next("default");
        this.layout.themeColor.next("light");
        this.layout.changeLayoutMode("default");
        this.layout.changeLayoutWidth("fluid");
        this.layout.changeThemeColor("light");
      }
      static ctorParameters = () => [
        { type: CommonService },
        { type: SettingsService }
      ];
      static propDecorators = {
        chart: [{ type: ViewChild, args: ["chart"] }]
      };
    };
    ModalDashboardComponent = __decorate([
      Component({
        selector: "app-modal-dashboard",
        imports: [CommonModule, NgApexchartsModule, RouterLink, DateRangePickerComponent],
        template: modal_dashboard_component_default,
        styles: [modal_dashboard_component_default2]
      })
    ], ModalDashboardComponent);
  }
});

// src/app/features/dashboard/modal-dashboard/modal-dashboard.component.spec.ts
var require_modal_dashboard_component_spec = __commonJS({
  "src/app/features/dashboard/modal-dashboard/modal-dashboard.component.spec.ts"(exports) {
    init_testing();
    init_modal_dashboard_component3();
    describe("ModalDashboardComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ModalDashboardComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ModalDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_modal_dashboard_component_spec();
//# sourceMappingURL=spec-app-features-dashboard-modal-dashboard-modal-dashboard.component.spec.js.map
