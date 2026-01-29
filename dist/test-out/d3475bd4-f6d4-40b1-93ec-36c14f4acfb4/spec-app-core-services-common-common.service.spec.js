import {
  CommonService,
  init_common_service
} from "./chunk-2O5UQ647.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import "./chunk-W6MIRXHE.js";
import "./chunk-FWMZPJRE.js";

// src/app/core/services/common/common.service.spec.ts
init_testing();
init_common_service();
describe("CommonService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-core-services-common-common.service.spec.js.map
