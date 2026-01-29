import {
  PaginationService,
  init_pagination_service
} from "./chunk-MK4VFZLN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import "./chunk-W6MIRXHE.js";
import "./chunk-FWMZPJRE.js";

// src/app/shared/custom-pagination/pagination.service.spec.ts
init_testing();
init_pagination_service();
describe("PaginationService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-shared-custom-pagination-pagination.service.spec.js.map
