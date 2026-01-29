import {
  STOCK_REPOSITORY,
  init_stock_repository
} from "./chunk-74MXOQEM.js";
import {
  APPLICATION_CONTEXT,
  init_application_context_port
} from "./chunk-MU4ENZR6.js";
import {
  Result,
  UnauthorizedError,
  init_domain_error,
  init_result_type
} from "./chunk-THVLRUNZ.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Inject,
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// src/app/modules/stock/application/use-cases/movements/create-stock-movement.use-case.impl.ts
var CreateStockMovementUseCaseImpl;
var init_create_stock_movement_use_case_impl = __esm({
  "src/app/modules/stock/application/use-cases/movements/create-stock-movement.use-case.impl.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_stock_repository();
    init_result_type();
    init_domain_error();
    init_application_context_port();
    CreateStockMovementUseCaseImpl = class CreateStockMovementUseCaseImpl2 {
      stockRepository;
      context;
      constructor(stockRepository, context) {
        this.stockRepository = stockRepository;
        this.context = context;
      }
      execute(dto) {
        return __async(this, null, function* () {
          if (!this.context.isAuthenticated()) {
            return Result.fail(new UnauthorizedError("create stock movement"));
          }
          const userId = this.context.getUserId();
          const movement = {
            type: dto.type,
            productId: dto.productId,
            quantity: dto.quantity,
            warehouseId: dto.warehouseId,
            destinationWarehouseId: dto.destinationWarehouseId,
            documentReference: dto.documentReference,
            lotNumber: dto.lotNumber,
            serialNumber: dto.serialNumber,
            unitCost: dto.unitCost,
            reason: dto.reason,
            notes: dto.notes,
            movementDate: dto.movementDate || /* @__PURE__ */ new Date(),
            createdBy: userId ? userId.toString() : "system",
            isValidated: false
          };
          const result = yield this.stockRepository.createMovement(movement);
          if (result.isFailure) {
            return Result.fail(result.error);
          }
          const createdMovement = result.value;
          return Result.ok({
            id: createdMovement.id,
            type: createdMovement.type,
            productId: createdMovement.productId,
            quantity: createdMovement.quantity,
            warehouseId: createdMovement.warehouseId,
            destinationWarehouseId: createdMovement.destinationWarehouseId,
            documentReference: createdMovement.documentReference,
            lotNumber: createdMovement.lotNumber,
            serialNumber: createdMovement.serialNumber,
            unitCost: createdMovement.unitCost,
            reason: createdMovement.reason,
            notes: createdMovement.notes,
            movementDate: createdMovement.movementDate,
            createdAt: createdMovement.createdAt,
            createdBy: createdMovement.createdBy,
            isValidated: createdMovement.isValidated,
            validatedAt: createdMovement.validatedAt,
            validatedBy: createdMovement.validatedBy
          });
        });
      }
      static ctorParameters = () => [
        { type: void 0, decorators: [{ type: Inject, args: [STOCK_REPOSITORY] }] },
        { type: void 0, decorators: [{ type: Inject, args: [APPLICATION_CONTEXT] }] }
      ];
    };
    CreateStockMovementUseCaseImpl = __decorate([
      Injectable()
    ], CreateStockMovementUseCaseImpl);
  }
});

// src/app/modules/stock/domain/entities/stock-movement.entity.ts
var StockMovementType;
var init_stock_movement_entity = __esm({
  "src/app/modules/stock/domain/entities/stock-movement.entity.ts"() {
    "use strict";
    (function(StockMovementType2) {
      StockMovementType2["ENTRY"] = "ENTRY";
      StockMovementType2["EXIT"] = "EXIT";
      StockMovementType2["TRANSFER"] = "TRANSFER";
      StockMovementType2["ADJUSTMENT"] = "ADJUSTMENT";
      StockMovementType2["RETURN"] = "RETURN";
    })(StockMovementType || (StockMovementType = {}));
  }
});

// src/app/modules/stock/application/use-cases/movements/create-stock-movement.use-case.spec.ts
var require_create_stock_movement_use_case_spec = __commonJS({
  "src/app/modules/stock/application/use-cases/movements/create-stock-movement.use-case.spec.ts"(exports) {
    init_testing();
    init_create_stock_movement_use_case_impl();
    init_stock_repository();
    init_application_context_port();
    init_result_type();
    init_stock_movement_entity();
    init_domain_error();
    describe("CreateStockMovementUseCaseImpl", () => {
      let useCase;
      let mockStockRepository;
      let mockApplicationContext;
      beforeEach(() => {
        mockStockRepository = jasmine.createSpyObj("StockRepository", ["createMovement"]);
        mockApplicationContext = jasmine.createSpyObj("ApplicationContext", ["isAuthenticated", "getUserId"]);
        TestBed.configureTestingModule({
          providers: [
            CreateStockMovementUseCaseImpl,
            { provide: STOCK_REPOSITORY, useValue: mockStockRepository },
            { provide: APPLICATION_CONTEXT, useValue: mockApplicationContext }
          ]
        });
        useCase = TestBed.inject(CreateStockMovementUseCaseImpl);
      });
      it("should be created", () => {
        expect(useCase).toBeTruthy();
      });
      it("should return error if user is not authenticated", () => __async(null, null, function* () {
        mockApplicationContext.isAuthenticated.and.returnValue(false);
        const dto = {
          productId: "1",
          warehouseId: "1",
          quantity: 10,
          type: StockMovementType.ENTRY
        };
        const result = yield useCase.execute(dto);
        expect(result.isFailure).toBeTrue();
        expect(result.error).toBeInstanceOf(UnauthorizedError);
        expect(mockStockRepository.createMovement).not.toHaveBeenCalled();
      }));
      it("should create movement successfully when authenticated", () => __async(null, null, function* () {
        mockApplicationContext.isAuthenticated.and.returnValue(true);
        mockApplicationContext.getUserId.and.returnValue(123);
        const date = /* @__PURE__ */ new Date();
        const dto = {
          productId: "prod1",
          warehouseId: "wh1",
          quantity: 10,
          type: StockMovementType.ENTRY,
          reason: "Test"
        };
        const createdMovement = __spreadProps(__spreadValues({
          id: "mov1"
        }, dto), {
          movementDate: date,
          createdAt: date,
          createdBy: "123",
          isValidated: false
        });
        mockStockRepository.createMovement.and.returnValue(Promise.resolve(Result.ok(createdMovement)));
        const result = yield useCase.execute(dto);
        expect(result.isSuccess).toBeTrue();
        expect(result.value.id).toBe("mov1");
        expect(result.value.createdBy).toBe("123");
        expect(mockStockRepository.createMovement).toHaveBeenCalledWith(jasmine.objectContaining({
          productId: "prod1",
          createdBy: "123"
        }));
      }));
    });
  }
});
export default require_create_stock_movement_use_case_spec();
//# sourceMappingURL=spec-app-modules-stock-application-use-cases-movements-create-stock-movement.use-case.spec.js.map
