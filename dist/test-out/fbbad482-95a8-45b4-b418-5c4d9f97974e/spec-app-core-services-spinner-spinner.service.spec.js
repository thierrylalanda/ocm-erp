import {
  SpinnerService,
  init_spinner_service
} from "./chunk-EOPPSJQQ.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import "./chunk-W6MIRXHE.js";
import "./chunk-FWMZPJRE.js";

// src/app/core/services/spinner/spinner.service.spec.ts
init_testing();
init_spinner_service();
describe("SpinnerService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-core-services-spinner-spinner.service.spec.js.map
