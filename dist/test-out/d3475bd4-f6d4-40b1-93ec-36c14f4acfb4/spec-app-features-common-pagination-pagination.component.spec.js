import {
  HttpClient,
  init_http
} from "./chunk-H7VTUQ3B.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/common/pagination/pagination.component.html
var pagination_component_default;
var init_pagination_component = __esm({
  "angular:jit:template:src/app/features/common/pagination/pagination.component.html"() {
    pagination_component_default = `<div class="table_footer">
  <div class="col-sm-12 col-md-5">
    <div class="dataTables_info">
      Showing {{ serialNumberArray[0] }} to
      {{ serialNumberArray[serialNumberArray.length - 1] }} of
      {{ totalData }} entries
    </div>
  </div>

  <div class="col-sm-12 col-md-7">
    <div class="pagination_section">
      <ul class="pagination">
        <li
          class="page-item"
          [ngClass]="{
            disabled: currentPage === 1
          }"
          >
          <a
            (click)="getMoreData('previous')"
            class="page-link"
            href="javascript:void(0);"
            tabindex="-1"
            >Previous</a
            >
          </li>

          @for (item of pageNumberArray; track item; let i = $index) {
            <li
              class="page-item"
              [class.active]="item === currentPage"
            [ngClass]="
              (pageNumberArray[currentPage - 2] > item &&
                item !== 1 &&
                pageNumberArray.length > 6) ||
              (pageNumberArray[currentPage] < item &&
                item !== 1 &&
                pageNumberArray.length > 6 &&
                pageNumberArray.length !== item)
                ? 'hide-sub-menu'
                : 'show-sub-menu'
            "
              >
              <a
                (click)="moveToPage(item)"
                class="page-link"
                href="javascript:void(0);"
                >
                {{ item }}
                @if (item === currentPage) {
                  <span class="visually-hidden">(current)</span>
                }
              </a>
            </li>
            @if (i === 0 && pageNumberArray.length > 6 && currentPage > 2) {
              <li
                class="page-item"
                [hidden]="currentPage === 1"
                >
                <a class="page-link"  (click)="moveToPage(currentPage - 2)" href="javascript:void(0);"> ... </a>
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
                >
                <a class="page-link"  (click)="moveToPage(currentPage + 2)" href="javascript:void(0);"> ... </a>
              </li>
            }
          }

          <li
            class="page-item"
          [ngClass]="{
            disabled: currentPage === pageNumberArray[pageNumberArray.length - 1]
          }"
            >
            <a
              (click)="getMoreData('next')"
              class="page-link"
              href="javascript:void(0);"
              >Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
`;
  }
});

// angular:jit:style:src/app/features/common/pagination/pagination.component.scss
var pagination_component_default2;
var init_pagination_component2 = __esm({
  "angular:jit:style:src/app/features/common/pagination/pagination.component.scss"() {
    pagination_component_default2 = "/* src/app/features/common/pagination/pagination.component.scss */\n/*# sourceMappingURL=pagination.component.css.map */\n";
  }
});

// src/app/features/common/pagination/pagination.component.ts
var PaginationComponent;
var init_pagination_component3 = __esm({
  "src/app/features/common/pagination/pagination.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_pagination_component();
    init_pagination_component2();
    init_http();
    init_core();
    PaginationComponent = class PaginationComponent2 {
      http;
      lastIndex = 0;
      pageSize = 10;
      totalData = 0;
      skip = 0;
      limit = this.pageSize;
      pageIndex = 0;
      serialNumberArray = [];
      currentPage = 1;
      pageNumberArray = [];
      pageSelection = [];
      totalPages = 0;
      localData = [];
      sendData = [];
      paginationType = "server";
      api = "https://api.instantwebtools.net/v1/passenger?page=0&size=$100";
      constructor(http) {
        this.http = http;
      }
      ngOnInit() {
        this.serialNumberArray = [];
        this.getTableData();
      }
      getTableData() {
        if (this.paginationType == "local") {
          this.localData.map((res, index) => {
            const serialNumber = index + 1;
            if (index >= this.skip && serialNumber <= this.limit) {
              res.id = serialNumber;
              this.sendData.push(res);
              this.serialNumberArray.push(serialNumber);
            }
          });
          this.totalData = this.localData.length;
          this.calculateTotalPages(this.totalData, this.pageSize);
        } else if (this.paginationType == "server") {
          this.http.get(this.api).subscribe((serverData) => {
            serverData.data.map((res, index) => {
              const serialNumber = index + 1;
              if (index >= this.skip && serialNumber <= this.limit) {
                res.serialNumber = serialNumber;
                this.sendData.push(res);
                this.serialNumberArray.push(serialNumber);
              }
            });
            this.totalData = serverData.totalPassengers;
            this.calculateTotalPages(this.totalData, this.pageSize);
          });
        }
      }
      getMoreData(event) {
        if (event == "next") {
          this.currentPage++;
          this.pageIndex = this.currentPage - 1;
          this.limit += this.pageSize;
          this.skip = this.pageSize * this.pageIndex;
          this.getTableData();
        } else if (event == "previous") {
          this.currentPage--;
          this.pageIndex = this.currentPage - 1;
          this.limit -= this.pageSize;
          this.skip = this.pageSize * this.pageIndex;
          this.getTableData();
        }
      }
      moveToPage(pageNumber) {
        this.currentPage = pageNumber;
        this.skip = this.pageSelection[pageNumber - 1].skip;
        this.limit = this.pageSelection[pageNumber - 1].limit;
        if (pageNumber > this.currentPage) {
          this.pageIndex = pageNumber - 1;
        } else if (pageNumber < this.currentPage) {
          this.pageIndex = pageNumber + 1;
        }
        this.getTableData();
      }
      changePageSize() {
        this.pageSelection = [];
        this.limit = this.pageSize;
        this.skip = 0;
        this.currentPage = 1;
        this.getTableData();
      }
      calculateTotalPages(totalData, pageSize) {
        this.pageNumberArray = [];
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
        { type: HttpClient }
      ];
      static propDecorators = {
        pageSize: [{ type: Input }]
      };
    };
    PaginationComponent = __decorate([
      Component({
        selector: "app-pagination",
        template: pagination_component_default,
        standalone: false,
        styles: [pagination_component_default2]
      })
    ], PaginationComponent);
  }
});

// src/app/features/common/pagination/pagination.component.spec.ts
var require_pagination_component_spec = __commonJS({
  "src/app/features/common/pagination/pagination.component.spec.ts"(exports) {
    init_testing();
    init_pagination_component3();
    describe("PaginationComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [PaginationComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_pagination_component_spec();
//# sourceMappingURL=spec-app-features-common-pagination-pagination.component.spec.js.map
