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

// src/app/shared/custom-pagination/pagination.service.ts
var PaginationService;
var init_pagination_service = __esm({
  "src/app/shared/custom-pagination/pagination.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    PaginationService = class PaginationService2 {
      tablePageSize = new BehaviorSubject({ skip: 0, limit: 10, pageSize: 10 });
      calculatePageSize = new BehaviorSubject({
        totalData: 0,
        pageSize: 10,
        tableData: [],
        serialNumberArray: []
      });
      changePagesize = new BehaviorSubject({
        pageSize: 10
      });
    };
    PaginationService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], PaginationService);
  }
});

export {
  PaginationService,
  init_pagination_service
};
//# sourceMappingURL=chunk-MK4VFZLN.js.map
