import {
  MatSliderModule,
  init_slider
} from "./chunk-W5TEORCC.js";
import {
  DateRangePicker2Component,
  init_date_range_picker_2_component
} from "./chunk-HMAGJIZR.js";
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
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.html
var balance_sheet_component_default;
var init_balance_sheet_component = __esm({
  "angular:jit:template:src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.html"() {
    balance_sheet_component_default = `<!-- Start Content -->
<div class="content-two">

    <!-- Start Breadcrumb -->
    <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
            <h6 class="mb-0">Balance Sheet Report</h6>
        </div>
        <div class="my-xl-auto">
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
        </div>
    </div>
    <!-- Start Breadcrumb -->

    <div class="border-bottom mb-3">

        <!-- start row -->
        <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2 pb-1 border-bottom">
                            <div>
                                <h6 class="fs-16 fw-semibold mb-1">$30,000,000</h6>
                                <p class="mb-1">Total Assets</p>
                            </div>
                            <div>
                                <span class="badge badge-soft-primary p-2 rounded-circle">
                                    <i class="isax isax-dollar-circle fs-16"></i>
                                </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>5.62%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2 pb-1 border-bottom">
                            <div>
                                <h6 class="fs-16 fw-semibold mb-1">$100,000</h6>
                                <p class="mb-1">Total Liabilities</p>
                            </div>
                            <div>
                                <span class="badge badge-soft-success p-2 rounded-circle">
                                    <i class="isax isax-tick-circle fs-16"></i>
                                </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>11.4%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2 pb-1 border-bottom">
                            <div>
                                <h6 class="fs-16 fw-semibold mb-1">$400,000</h6>
                                <p class="mb-1">Net Worth (Equity)</p>
                            </div>
                            <div>
                                <span class="badge badge-soft-warning p-2 rounded-circle">
                                    <i class="isax isax-wallet-3 fs-16"></i>
                                </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-send text-success me-1"></i>8.52%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="card position-relative shadow-lg">
                    <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between mb-2 pb-1 border-bottom">
                            <div>
                                <h6 class="fs-16 fw-semibold mb-1">80%</h6>
                                <p class="mb-1">Equity Ratio</p>
                            </div>
                            <div>
                                <span class="badge badge-soft-danger p-2 rounded-circle">
                                    <i class="isax isax-wallet-money fs-16"></i>
                                </span>
                            </div>
                        </div>
                        <p class="fs-13 mb-0">
                            <span class="text-success"><i class="isax isax-received text-success me-1"></i>7.45%</span> from last month
                        </p>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div><!-- end col -->
        </div>
        <!-- end row -->

    </div>

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
                <app-date-range-picker-2/>
                <a class="btn btn-outline-white fw-normal d-inline-flex align-items-center" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#customcanvas">
                    <i class="isax isax-filter me-1"></i>Filter
                </a>
            </div>
            <div class="d-flex align-items-center flex-wrap gap-2">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <i class="isax isax-grid-3 me-1"></i>Column
                    </a>
                    <ul class="dropdown-menu  dropdown-menu-lg">
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Account Holder Name</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Bank & Account No</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Credit</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox">
                                <span>Debit</span>
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-item d-flex align-items-center form-switch">
                                <i class="fa-solid fa-grip-vertical me-3 text-default"></i>
                                <input class="form-check-input m-0 me-2" type="checkbox" checked>
                                <span>Balance</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Filter Info -->
        <div class="align-items-center gap-2 flex-wrap filter-info mt-3" [ngClass]="{'show':showFilter}">
            <h6 class="fs-13 fw-semibold">Filters</h6>
            <span class="tag bg-light border rounded-1 fs-12 text-dark badge" [ngClass]="{'d-none':selectedFilter[1]}"><span class="num-count d-inline-flex align-items-center justify-content-center bg-success fs-10 me-1">6</span>Account Holders Selected<span class="ms-1 tag-close" (click)="isSelectedFilter(1)"><i class="fa-solid fa-x fs-10"></i></span></span>
            <a href="javascript:void(0);" class="link-danger fw-medium text-decoration-underline ms-md-1" (click)="isFilter()">Clear All</a>
        </div>
        <!-- /Filter Info -->
    </div>
    <!-- End Table Search -->

    <!-- Table List Start -->
    <div class="table-responsive">
        <table matSort (matSortChange)="sortData($event)" class="table table-nowrap datatable dataTable">
            <thead class="thead-light">
                <tr>
                    <th class="no-sort">
                        <div class="form-check form-check-md" (click)="selectAll(initChecked)">
                            <input class="form-check-input" type="checkbox" id="select-all" [(ngModel)]="initChecked">
                        </div>
                    </th>
                    <th mat-sort-header="holder">Account Holder Name</th>
                    <th mat-sort-header="bank">Bank & Account No</th>
                    <th mat-sort-header="credit">Credit</th>
                    <th mat-sort-header="debit">Debit</th>
                    <th mat-sort-header="balance">Balance</th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){
                <tr>
                    <td>
                        <div class="form-check form-check-md">
                            <input class="form-check-input" type="checkbox" [(ngModel)]="data.isSelected">
                        </div>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle me-2 flex-shrink-0">
                                <img src="assets/img/profiles/{{data.Image}}" class="rounded-circle" alt="img">
                            </a>
                            <div>
                                <h6 class="fs-14 fw-medium mb-0"><a href="javascript:void(0);">{{data.AccountHolderName}}</a></h6>
                            </div>
                        </div>
                    </td>
                    <td>{{data.BankAccountNo}}</td>
                    <td>{{data.Credit}}</td>
                    <td>{{data.Debit}}</td>
                    <td>{{data.Balance}}</td>
                </tr>
            }
            @if(tableData.length === 0){
              <tr>
                <td colspan="12" class="text-center text-dark">No matching records found</td>
              </tr>
              }
            </tbody>
        </table>
    </div>
    <!-- Table List End -->
    <app-custom-pagination *ngIf="row"></app-custom-pagination>

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
                <label class="form-label">Account Holder</label>
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
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-28.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>Emily Clark
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-12.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>Sophia White
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-06.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>Michael Johnson
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-30.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>Olivia Harris
                                </label>
                            </li>
                            <li>
                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                    <span class="avatar avatar-sm rounded-circle me-2">
                                        <img src="assets/img/profiles/avatar-16.jpg" class="flex-shrink-0 rounded-circle" alt="img">
                                    </span>David Anderson
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
            <div class="offcanvas-footer">
                <div class="row g-2">
                    <div class="col-6">
                        <a href="javascript:void(0);" class="btn btn-outline-white w-100">Reset</a>
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

// angular:jit:style:src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.scss
var balance_sheet_component_default2;
var init_balance_sheet_component2 = __esm({
  "angular:jit:style:src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.scss"() {
    balance_sheet_component_default2 = "/* src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.scss */\n/*# sourceMappingURL=balance-sheet.component.css.map */\n";
  }
});

// src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.ts
var BalanceSheetComponent;
var init_balance_sheet_component3 = __esm({
  "src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_balance_sheet_component();
    init_balance_sheet_component2();
    init_core();
    init_sort();
    init_table();
    init_router();
    init_core_index();
    init_pagination_service();
    init_common();
    init_forms();
    init_custom_pagination_component();
    init_date_range_picker_2_component();
    init_slider();
    BalanceSheetComponent = class BalanceSheetComponent2 {
      data;
      router;
      pagination;
      routes = routes;
      showFilter = false;
      selectedFilter = [false];
      isFilter() {
        this.showFilter = !this.showFilter;
      }
      isSelectedFilter(index) {
        this.selectedFilter[index] = !this.selectedFilter[index];
      }
      formatLabel(value) {
        if (value >= 1e3) {
          return Math.round(value / 1e3) + "k";
        }
        return `${value}`;
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
        this.data.getBalancesheet().subscribe((apiRes) => {
          this.actualData = apiRes.data;
          this.pagination.tablePageSize.subscribe((res) => {
            if (this.router.url == this.routes.balanceSheet) {
              this.getTableData({ skip: res.skip, limit: res.limit });
              this.pageSize = res.pageSize;
            }
          });
        });
      }
      getTableData(pageOption) {
        this.data.getBalancesheet().subscribe((apiRes) => {
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
    BalanceSheetComponent = __decorate([
      Component({
        selector: "app-balance-sheet",
        imports: [
          CommonModule,
          FormsModule,
          CustomPaginationComponent,
          MatSortModule,
          DateRangePicker2Component,
          MatSliderModule
        ],
        template: balance_sheet_component_default,
        styles: [balance_sheet_component_default2]
      })
    ], BalanceSheetComponent);
  }
});

// src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.spec.ts
var require_balance_sheet_component_spec = __commonJS({
  "src/app/features/reports/accounting-report/balance-sheet/balance-sheet.component.spec.ts"(exports) {
    init_testing();
    init_balance_sheet_component3();
    describe("BalanceSheetComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [BalanceSheetComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(BalanceSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_balance_sheet_component_spec();
//# sourceMappingURL=spec-app-features-reports-accounting-report-balance-sheet-balance-sheet.component.spec.js.map
