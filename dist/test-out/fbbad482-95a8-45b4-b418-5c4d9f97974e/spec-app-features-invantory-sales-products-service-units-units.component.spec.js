import {
  MatTableDataSource,
  init_table
} from "./chunk-R4MVIOZR.js";
import "./chunk-N2Q3HONL.js";
import "./chunk-BDO5G4JQ.js";
import "./chunk-BAYPUVG5.js";
import "./chunk-V5QKIDZC.js";
import {
  PaginationService,
  init_pagination_service
} from "./chunk-MK4VFZLN.js";
import "./chunk-UJXPUDZY.js";
import "./chunk-33YSR6MK.js";
import "./chunk-LKMTQ47C.js";
import "./chunk-MTEB3W4S.js";
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
import "./chunk-HQHIWYWO.js";
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

// angular:jit:template:src/app/features/invantory-sales/products-service/units/units.component.html
var units_component_default;
var init_units_component = __esm({
  "angular:jit:template:src/app/features/invantory-sales/products-service/units/units.component.html"() {
    units_component_default = '			<!-- start container -->\n      <div class="content-two">\n\n        <!-- Start Breadcrumb -->\n        <div class="d-flex d-block align-items-center justify-content-between flex-wrap gap-3 mb-3">\n            <div>\n                <h6>Units</h6>\n            </div>\n            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap gap-2">\n                <div>\n                    <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_modal"><i class="isax isax-add-circle5 me-1"></i>New Unit</a>\n                </div>\n            </div>\n        </div>\n        <!-- End Breadcrumb -->\n\n        <div class="row">\n            <div class="col-md-3">\n                <div class="input-group mb-3">\n                    <span class="input-group-text bg-white border-end-0">\n        <i class="isax isax-search-normal fs-12"></i>\n      </span>\n                    <input type="text" class="form-control border-start-0 ps-0 bg-white" placeholder="Search">\n                </div>\n            </div> <!-- end col -->\n        </div> <!-- end row -->\n\n        <div class="table-responsive border border-bottom-0 rounded">\n            <table class="table table-nowrap m-0">\n                <thead class="table-light">\n                    <tr>\n                        <th>Unit Name</th>\n                        <th class="no-sort">Short Name</th>\n                        <th class="no-sort"></th>\n                        <th class="no-sort"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Kilogram</h6></td>\n                        <td>kg</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Gram</h6></td>\n                        <td>g</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Liter</h6></td>\n                        <td>l</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Millimetre</h6></td>\n                        <td>ml</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Box</h6></td>\n                        <td>bx</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Pack</h6></td>\n                        <td>pk</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <h6 class="fs-14 fw-medium mb-0">Piece</h6></td>\n                        <td>pc</td>\n                        <td>\n                            <div class="form-check form-switch">\n                                <input class="form-check-input" type="checkbox" role="switch" checked>\n                            </div>\n                        </td>\n                        <td class="action-item">\n                            <a href="javascript:void(0);" data-bs-toggle="dropdown">\n                                <i class="fa-solid fa-ellipsis-vertical"></i>\n                            </a>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit_modal"><i class="isax isax-edit me-2"></i>Edit</a>\n                                </li>\n                                <li>\n                                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash me-2"></i>Delete</a>\n                                </li>\n                            </ul>\n                        </td>\n                    </tr>\n                </tbody>\n            </table> <!-- end table -->\n        </div>\n\n    </div>\n<!-- end container -->';
  }
});

// angular:jit:style:src/app/features/invantory-sales/products-service/units/units.component.scss
var units_component_default2;
var init_units_component2 = __esm({
  "angular:jit:style:src/app/features/invantory-sales/products-service/units/units.component.scss"() {
    units_component_default2 = "/* src/app/features/invantory-sales/products-service/units/units.component.scss */\n/*# sourceMappingURL=units.component.css.map */\n";
  }
});

// src/app/features/invantory-sales/products-service/units/units.component.ts
var UnitsComponent;
var init_units_component3 = __esm({
  "src/app/features/invantory-sales/products-service/units/units.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_units_component();
    init_units_component2();
    init_core();
    init_table();
    init_router();
    init_pagination_service();
    init_core_index();
    UnitsComponent = class UnitsComponent2 {
      data;
      pagination;
      router;
      units = [];
      routes = routes;
      Toggledata = false;
      isCollapsed = false;
      // pagination variables
      pageSize = 10;
      serialNumberArray = [];
      totalData = 0;
      dataSource;
      searchDataValue = "";
      //** / pagination variables
      constructor(data, pagination, router) {
        this.data = data;
        this.pagination = pagination;
        this.router = router;
        this.pagination.tablePageSize.subscribe((res) => {
          if (this.router.url == this.routes.units) {
            this.getTableData({ skip: res.skip, limit: res.limit });
            this.pageSize = res.pageSize;
          }
        });
      }
      getTableData(pageOption) {
        this.data.getUnits().subscribe((apiRes) => {
          this.units = [];
          this.serialNumberArray = [];
          this.totalData = apiRes.totalData;
          apiRes.data.map((res, index) => {
            const serialNumber = index + 1;
            if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
              res.id = serialNumber;
              this.units.push(res);
              this.serialNumberArray.push(serialNumber);
            }
          });
          this.dataSource = new MatTableDataSource(this.units);
          this.pagination.calculatePageSize.next({
            totalData: this.totalData,
            pageSize: this.pageSize,
            tableData: this.units,
            serialNumberArray: this.serialNumberArray
          });
        });
      }
      sortData(sort) {
        const data = this.units.slice();
        if (!sort.active || sort.direction === "") {
          this.units = data;
        } else {
          this.units = data.sort((a, b) => {
            const aValue = a[sort.active];
            const bValue = b[sort.active];
            return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
          });
        }
      }
      open() {
        this.Toggledata = !this.Toggledata;
      }
      users = [
        { name: "Pricilla Maureen", checked: false },
        { name: "Randall Hollis", checked: false }
      ];
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      }
      static ctorParameters = () => [
        { type: DataService },
        { type: PaginationService },
        { type: Router }
      ];
    };
    UnitsComponent = __decorate([
      Component({
        selector: "app-units",
        template: units_component_default,
        imports: [],
        styles: [units_component_default2]
      })
    ], UnitsComponent);
  }
});

// src/app/features/invantory-sales/products-service/units/units.component.spec.ts
var require_units_component_spec = __commonJS({
  "src/app/features/invantory-sales/products-service/units/units.component.spec.ts"(exports) {
    init_testing();
    init_units_component3();
    describe("UnitsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [UnitsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(UnitsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_units_component_spec();
//# sourceMappingURL=spec-app-features-invantory-sales-products-service-units-units.component.spec.js.map
