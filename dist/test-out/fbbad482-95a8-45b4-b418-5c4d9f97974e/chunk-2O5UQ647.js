import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __esm
} from "./chunk-FWMZPJRE.js";

// src/app/core/services/common/common.service.ts
var CommonService;
var init_common_service = __esm({
  "src/app/core/services/common/common.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    CommonService = class CommonService2 {
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
  }
});

export {
  CommonService,
  init_common_service
};
//# sourceMappingURL=chunk-2O5UQ647.js.map
