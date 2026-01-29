import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import "./chunk-FWMZPJRE.js";

// src/app/shared/common/common.service.spec.ts
init_testing();

// src/app/shared/common/common.service.ts
init_tslib_es6();
init_core();
init_esm();
var CommonService = class CommonService2 {
  baseRoute = new BehaviorSubject("");
  pageRoute = new BehaviorSubject("");
  lastRoute = new BehaviorSubject("");
  currentRoute = new BehaviorSubject("");
};
CommonService = __decorate([
  Injectable({
    providedIn: "root"
  })
], CommonService);

// src/app/shared/common/common.service.spec.ts
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
//# sourceMappingURL=spec-app-shared-common-common.service.spec.js.map
