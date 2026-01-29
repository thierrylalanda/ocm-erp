import {
  SiteService,
  init_site_service
} from "./chunk-DLVY36ZV.js";
import {
  init_shared
} from "./chunk-LUFAATTA.js";
import {
  APPLICATION_CONTEXT
} from "./chunk-MU4ENZR6.js";
import "./chunk-KZXJWDFC.js";
import "./chunk-DJVIHOKC.js";
import "./chunk-4XZF5GTU.js";
import "./chunk-PRPNIB7R.js";
import "./chunk-N3H5GIVS.js";
import {
  AlreadyExistsError,
  InfrastructureError,
  Result,
  ValidationError
} from "./chunk-THVLRUNZ.js";
import "./chunk-Q2A5OOYR.js";
import "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  Inject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6,
  of,
  throwError
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-FWMZPJRE.js";

// src/app/modules/setting/application/use-cases/create-site.use-case.ts
var CreateSiteUseCaseImpl;
var init_create_site_use_case = __esm({
  "src/app/modules/setting/application/use-cases/create-site.use-case.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_shared();
    init_site_service();
    CreateSiteUseCaseImpl = class CreateSiteUseCaseImpl2 {
      siteService;
      context;
      constructor(siteService, context) {
        this.siteService = siteService;
        this.context = context;
      }
      execute(dto) {
        return __async(this, null, function* () {
          try {
            if (!dto.nom || dto.nom.trim().length === 0) {
              return Result.fail(new ValidationError("Le nom du site est requis"));
            }
            if (!dto.code || dto.code.trim().length === 0) {
              return Result.fail(new ValidationError("Le code du site est requis"));
            }
            const societeId = this.context.getSocieteId();
            if (!societeId) {
              return Result.fail(new ValidationError("Soci\xE9t\xE9 non trouv\xE9e dans le contexte"));
            }
            const codeAvailable = yield this.siteService.checkCodeAvailability(dto.code, societeId).toPromise();
            if (!codeAvailable) {
              return Result.fail(new AlreadyExistsError("Site", "code", dto.code));
            }
            const site = yield this.siteService.createSite(__spreadProps(__spreadValues({}, dto), {
              societeId
            })).toPromise();
            if (!site) {
              return Result.fail(new InfrastructureError("Erreur lors de la cr\xE9ation du site"));
            }
            return Result.ok(site);
          } catch (error) {
            console.error("CreateSiteUseCase error:", error);
            return Result.fail(new InfrastructureError(error.message || "Erreur lors de la cr\xE9ation du site"));
          }
        });
      }
      static ctorParameters = () => [
        { type: SiteService },
        { type: void 0, decorators: [{ type: Inject, args: [APPLICATION_CONTEXT] }] }
      ];
    };
    CreateSiteUseCaseImpl = __decorate([
      Injectable()
    ], CreateSiteUseCaseImpl);
  }
});

// src/app/modules/setting/application/use-cases/create-site.use-case.spec.ts
var require_create_site_use_case_spec = __commonJS({
  "src/app/modules/setting/application/use-cases/create-site.use-case.spec.ts"(exports) {
    init_create_site_use_case();
    init_shared();
    init_esm();
    describe("CreateSiteUseCase", () => {
      let useCase;
      let mockSiteService;
      let mockContext;
      beforeEach(() => {
        mockSiteService = {
          checkCodeAvailability: jasmine.createSpy("checkCodeAvailability"),
          createSite: jasmine.createSpy("createSite")
        };
        mockContext = {
          getSocieteId: jasmine.createSpy("getSocieteId").and.returnValue(1),
          getSocieteNom: jasmine.createSpy("getSocieteNom").and.returnValue("Test Company"),
          getUserId: jasmine.createSpy("getUserId").and.returnValue(1),
          getUserName: jasmine.createSpy("getUserName").and.returnValue("testuser"),
          getSiteId: jasmine.createSpy("getSiteId").and.returnValue(null),
          getDepartementId: jasmine.createSpy("getDepartementId").and.returnValue(null),
          getUser: jasmine.createSpy("getUser").and.returnValue(null),
          isAuthenticated: jasmine.createSpy("isAuthenticated").and.returnValue(true)
        };
        useCase = new CreateSiteUseCaseImpl(mockSiteService, mockContext);
      });
      describe("execute", () => {
        it("should create site successfully", () => __async(null, null, function* () {
          const dto = {
            nom: "Site Test",
            code: "ST001",
            type: "SIEGE",
            ville: "Test City",
            pays: "Test Country",
            societeId: 1,
            actif: true
          };
          const expectedSite = {
            id: 1,
            nom: "Site Test",
            code: "ST001",
            type: "SIEGE",
            ville: "Test City",
            pays: "Test Country",
            societeId: 1,
            societeNom: "Test Company",
            actif: true,
            dateCreation: "2024-01-01T00:00:00Z"
          };
          mockSiteService.checkCodeAvailability.and.returnValue(of(true));
          mockSiteService.createSite.and.returnValue(of(expectedSite));
          const result = yield useCase.execute(dto);
          expect(result.isSuccess).toBe(true);
          expect(mockSiteService.checkCodeAvailability).toHaveBeenCalledWith("ST001", 1);
          expect(mockSiteService.createSite).toHaveBeenCalledWith(dto);
        }));
        it("should fail when nom is empty", () => __async(null, null, function* () {
          const dto = {
            nom: "",
            code: "ST001",
            type: "SIEGE"
          };
          const result = yield useCase.execute(dto);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(ValidationError);
          expect(result.error.message).toContain("nom");
          expect(mockSiteService.createSite).not.toHaveBeenCalled();
        }));
        it("should fail when code is empty", () => __async(null, null, function* () {
          const dto = {
            nom: "Site Test",
            code: "",
            type: "SIEGE"
          };
          const result = yield useCase.execute(dto);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(ValidationError);
          expect(result.error.message).toContain("code");
          expect(mockSiteService.createSite).not.toHaveBeenCalled();
        }));
        it("should fail when societeId is not in context", () => __async(null, null, function* () {
          mockContext.getSocieteId.and.returnValue(0);
          const dto = {
            nom: "Site Test",
            code: "ST001",
            type: "SIEGE"
          };
          const result = yield useCase.execute(dto);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(ValidationError);
          expect(result.error.message).toContain("Soci\xE9t\xE9");
          expect(mockSiteService.createSite).not.toHaveBeenCalled();
        }));
        it("should fail when code already exists", () => __async(null, null, function* () {
          const dto = {
            nom: "Site Test",
            code: "ST001",
            type: "SIEGE"
          };
          mockSiteService.checkCodeAvailability.and.returnValue(of(false));
          const result = yield useCase.execute(dto);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(AlreadyExistsError);
          expect(result.error.message).toContain("ST001");
          expect(mockSiteService.createSite).not.toHaveBeenCalled();
        }));
        it("should handle service errors", () => __async(null, null, function* () {
          const dto = {
            nom: "Site Test",
            code: "ST001",
            type: "SIEGE"
          };
          mockSiteService.checkCodeAvailability.and.returnValue(of(true));
          mockSiteService.createSite.and.returnValue(throwError(() => new Error("Database error")));
          const result = yield useCase.execute(dto);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(InfrastructureError);
        }));
        it("should handle null response from service", () => __async(null, null, function* () {
          const dto = {
            nom: "Site Test",
            code: "ST001",
            type: "SIEGE"
          };
          mockSiteService.checkCodeAvailability.and.returnValue(of(true));
          mockSiteService.createSite.and.returnValue(of(null));
          const result = yield useCase.execute(dto);
          expect(result.isFailure).toBe(true);
          expect(result.error).toBeInstanceOf(InfrastructureError);
        }));
      });
    });
  }
});
export default require_create_site_use_case_spec();
//# sourceMappingURL=spec-app-modules-setting-application-use-cases-create-site.use-case.spec.js.map
