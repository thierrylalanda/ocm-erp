import {
  InfrastructureError,
  Result,
  STOCK_REPOSITORY,
  __decorate,
  init_domain_error,
  init_result_type,
  init_stock_repository,
  init_tslib_es6
} from "./chunk-5CFYFLVI.js";
import {
  Inject,
  Injectable,
  TestBed,
  init_core,
  init_testing
} from "./chunk-4CJWS6IG.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// src/app/modules/stock/application/use-cases/inventory/get-stock-level.use-case.impl.ts
var GetStockLevelUseCaseImpl;
var init_get_stock_level_use_case_impl = __esm({
  "src/app/modules/stock/application/use-cases/inventory/get-stock-level.use-case.impl.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_stock_repository();
    init_result_type();
    GetStockLevelUseCaseImpl = class GetStockLevelUseCaseImpl2 {
      stockRepository;
      constructor(stockRepository) {
        this.stockRepository = stockRepository;
      }
      execute(productId, warehouseId) {
        return __async(this, null, function* () {
          const result = yield this.stockRepository.getStockLevel(productId || "", warehouseId);
          if (result.isFailure) {
            return Result.fail(result.error);
          }
          const inventory = result.value;
          const dtos = inventory.map((i) => ({
            id: i.id,
            productId: i.productId,
            productName: i.productName || "Unknown Product",
            productReference: i.productReference || "-",
            warehouseId: i.warehouseId,
            warehouseName: i.warehouseName || "Unknown Warehouse",
            quantity: i.quantity,
            reservedQuantity: i.reservedQuantity,
            availableQuantity: i.availableQuantity,
            stockValue: i.stockValue,
            averageCost: i.averageCost,
            lastMovementDate: i.lastMovementDate,
            updatedAt: i.updatedAt
          }));
          return Result.ok(dtos);
        });
      }
      static ctorParameters = () => [
        { type: void 0, decorators: [{ type: Inject, args: [STOCK_REPOSITORY] }] }
      ];
    };
    GetStockLevelUseCaseImpl = __decorate([
      Injectable()
    ], GetStockLevelUseCaseImpl);
  }
});

// src/app/modules/stock/application/use-cases/inventory/get-stock-level.use-case.spec.ts
var require_get_stock_level_use_case_spec = __commonJS({
  "src/app/modules/stock/application/use-cases/inventory/get-stock-level.use-case.spec.ts"(exports) {
    init_testing();
    init_get_stock_level_use_case_impl();
    init_stock_repository();
    init_result_type();
    init_domain_error();
    describe("GetStockLevelUseCaseImpl", () => {
      let useCase;
      let mockStockRepository;
      beforeEach(() => {
        mockStockRepository = jasmine.createSpyObj("StockRepository", ["getStockLevel"]);
        TestBed.configureTestingModule({
          providers: [
            GetStockLevelUseCaseImpl,
            { provide: STOCK_REPOSITORY, useValue: mockStockRepository }
          ]
        });
        useCase = TestBed.inject(GetStockLevelUseCaseImpl);
      });
      it("should be created", () => {
        expect(useCase).toBeTruthy();
      });
      it("should return mapped inventory dtos on success", () => __async(null, null, function* () {
        const mockDate = /* @__PURE__ */ new Date();
        const mockInventory = [{
          id: "1",
          productId: "prod1",
          productName: "Product 1",
          productReference: "REF1",
          warehouseId: "wh1",
          warehouseName: "Warehouse 1",
          quantity: 10,
          reservedQuantity: 2,
          availableQuantity: 8,
          stockValue: 100,
          averageCost: 10,
          lastMovementDate: mockDate,
          updatedAt: mockDate
        }];
        mockStockRepository.getStockLevel.and.returnValue(Promise.resolve(Result.ok(mockInventory)));
        const result = yield useCase.execute();
        expect(result.isSuccess).toBeTrue();
        expect(result.value.length).toBe(1);
        expect(result.value[0].productName).toBe("Product 1");
        expect(result.value[0].availableQuantity).toBe(8);
        expect(mockStockRepository.getStockLevel).toHaveBeenCalled();
      }));
      it("should propagate error on failure", () => __async(null, null, function* () {
        const error = new InfrastructureError("Failed");
        mockStockRepository.getStockLevel.and.returnValue(Promise.resolve(Result.fail(error)));
        const result = yield useCase.execute();
        expect(result.isFailure).toBeTrue();
        expect(result.error).toEqual(error);
      }));
    });
  }
});
export default require_get_stock_level_use_case_spec();
//# sourceMappingURL=spec-app-modules-stock-application-use-cases-inventory-get-stock-level.use-case.spec.js.map
