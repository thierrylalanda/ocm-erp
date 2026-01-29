import {
  ToasterService,
  init_toaster_service
} from "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import "./chunk-W6MIRXHE.js";
import "./chunk-FWMZPJRE.js";

// src/app/core/services/toaster/toaster.service.spec.ts
init_testing();
init_toaster_service();
describe("ToasterService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasterService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-core-services-toaster-toaster.service.spec.js.map
