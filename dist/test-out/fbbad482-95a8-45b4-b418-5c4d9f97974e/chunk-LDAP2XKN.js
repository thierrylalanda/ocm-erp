import {
  PaginationService,
  init_pagination_service
} from "./chunk-MK4VFZLN.js";
import {
  FormsModule,
  ReactiveFormsModule,
  init_forms
} from "./chunk-2RBILSOV.js";
import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/shared/custom-pagination/custom-pagination.component.html
var custom_pagination_component_default;
var init_custom_pagination_component = __esm({
  "angular:jit:template:src/app/shared/custom-pagination/custom-pagination.component.html"() {
    custom_pagination_component_default = `
  <div class="dataTables_length pt-0">
    <label>
      Row Per Page 
      <select
        [(ngModel)]="pageSize"
        (ngModelChange)="changePageSize(pageSize)"
        class="form-select form-select-sm"
        >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      Entries
    </label>
  </div>
  <div class="dataTables_paginate paging_simple_numbers">
    <!-- <div class="entries">
    {{ serialNumberArray[0] }} -
    {{ serialNumberArray[serialNumberArray.length - 1] }} of
    {{ totalData }} items
  </div> -->
    <ul class="pagination">
      <li
        class="paginate_button page-item previous"
            [ngClass]="{
              disabled: currentPage === 1
            }"
        >
        <a
          (click)="getMoreData('previous')"
          class="page-link me-0"
          href="javascript:void(0);"
          tabindex="-1"
          ><i class="isax isax-arrow-left"></i></a
          >
        </li>

        @for (item of pageNumberArray; track item; let i = $index) {
          <li
            class="page-item"
            [class.active]="item === currentPage"
              [ngClass]="
                (pageNumberArray[currentPage - 2] > item &&
                  item !==  1 &&
                  pageNumberArray.length > 6) ||
                (pageNumberArray[currentPage] < item &&
                  item !==  1 &&
                  pageNumberArray.length > 6 &&
                  pageNumberArray.length !==  item)
                  ? 'hide-page-no'
                  : 'show-page-no'
              "
            >
            <a
              (click)="moveToPage(item)"
              class="page-link"
              href="javascript:void(0);"
              >
              {{ item }}
            </a>
          </li>
          @if (i === 0 && pageNumberArray.length > 6 && currentPage > 2) {
            <li
              class="page-item"
              [hidden]="currentPage === 1"
              (click)="moveToPage(currentPage - 2)"
              (keydown.enter)="moveToPage(currentPage - 2)" tabindex="0"
              >
              <a class="page-link" href="javascript:void(0);"> ... </a>
            </li>
          }
          @if (
            i === pageNumberArray.length - 2 && pageNumberArray.length > 6
            ) {
            <li
              [hidden]="
                currentPage >= pageNumberArray[pageNumberArray.length - 2] ||
                totalData < serialNumberArray[serialNumberArray.length - 1]
              "
              class="page-item"
              (click)="moveToPage(currentPage + 2)" (keydown.enter)="moveToPage(currentPage + 2)" tabindex="0"
              >
              <a class="page-link" href="javascript:void(0);"> ... </a>
            </li>
          }
        }

        <li
          class="paginate_button page-item next"
            [ngClass]="{
              disabled:
                currentPage === pageNumberArray[pageNumberArray.length - 1] ||
                tableData.length === 0
            }"
          >
          <a
            (click)="getMoreData('next')"
            class="page-link ms-0"
            href="javascript:void(0);"
            ><i class="isax isax-arrow-right-1"></i>
          </a>
        </li>
      </ul>
  </div>
`;
  }
});

// angular:jit:style:src/app/shared/custom-pagination/custom-pagination.component.scss
var custom_pagination_component_default2;
var init_custom_pagination_component2 = __esm({
  "angular:jit:style:src/app/shared/custom-pagination/custom-pagination.component.scss"() {
    custom_pagination_component_default2 = "/* src/app/shared/custom-pagination/custom-pagination.component.scss */\n/*# sourceMappingURL=custom-pagination.component.css.map */\n";
  }
});

// src/app/shared/custom-pagination/custom-pagination.component.ts
var CustomPaginationComponent;
var init_custom_pagination_component3 = __esm({
  "src/app/shared/custom-pagination/custom-pagination.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_custom_pagination_component();
    init_custom_pagination_component2();
    init_core();
    init_pagination_service();
    init_forms();
    init_common();
    CustomPaginationComponent = class CustomPaginationComponent2 {
      pagination;
      pageSize = 10;
      tableData = [];
      // pagination variables
      lastIndex = 0;
      totalData = 0;
      skip = 0;
      limit = this.pageSize;
      pageIndex = 0;
      serialNumberArray = [];
      currentPage = 1;
      pageNumberArray = [];
      pageSelection = [];
      totalPages = 0;
      //** / pagination variables
      constructor(pagination) {
        this.pagination = pagination;
        this.tableData = [];
        this.pagination.calculatePageSize.subscribe((res) => {
          this.calculateTotalPages(res.totalData, res.pageSize, res.tableData, res.serialNumberArray);
          this.pageSize = res.pageSize;
        });
        this.pagination.changePagesize.subscribe((res) => {
          this.changePageSize(res.pageSize);
        });
      }
      getMoreData(event) {
        if (event == "next") {
          this.currentPage++;
          this.pageIndex = this.currentPage - 1;
          this.limit += this.pageSize;
          this.skip = this.pageSize * this.pageIndex;
          this.pagination.tablePageSize.next({
            skip: this.skip,
            limit: this.limit,
            pageSize: this.pageSize
          });
        } else if (event == "previous") {
          this.currentPage--;
          this.pageIndex = this.currentPage - 1;
          this.limit -= this.pageSize;
          this.skip = this.pageSize * this.pageIndex;
          this.pagination.tablePageSize.next({
            skip: this.skip,
            limit: this.limit,
            pageSize: this.pageSize
          });
        }
      }
      moveToPage(pageNumber) {
        if (pageNumber === this.currentPage) {
          return;
        }
        this.currentPage = pageNumber;
        this.skip = this.pageSelection[pageNumber - 1].skip;
        this.limit = this.pageSelection[pageNumber - 1].limit;
        if (pageNumber > this.currentPage) {
          this.pageIndex = pageNumber - 1;
        } else if (pageNumber < this.currentPage) {
          this.pageIndex = pageNumber + 1;
        }
        this.pagination.tablePageSize.next({
          skip: this.skip,
          limit: this.limit,
          pageSize: this.pageSize
        });
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
      calculateTotalPages(totalData, pageSize, tableData, serialNumberArray) {
        this.tableData = tableData;
        this.pageNumberArray = [];
        this.serialNumberArray = serialNumberArray;
        this.totalData = totalData;
        this.totalPages = totalData / pageSize;
        if (this.totalPages % 1 != 0) {
          this.totalPages = Math.trunc(this.totalPages + 1);
        }
        for (let i = 1; i <= this.totalPages; i++) {
          const limit = pageSize * i;
          const skip = limit - pageSize;
          this.pageNumberArray.push(i);
          this.pageSelection.push({ skip, limit });
        }
      }
      static ctorParameters = () => [
        { type: PaginationService }
      ];
    };
    CustomPaginationComponent = __decorate([
      Component({
        selector: "app-custom-pagination",
        template: custom_pagination_component_default,
        imports: [CommonModule, FormsModule, ReactiveFormsModule],
        styles: [custom_pagination_component_default2]
      })
    ], CustomPaginationComponent);
  }
});

export {
  CustomPaginationComponent,
  init_custom_pagination_component3 as init_custom_pagination_component
};
//# sourceMappingURL=chunk-LDAP2XKN.js.map
