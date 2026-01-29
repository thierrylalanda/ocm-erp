import {
  HttpClient,
  init_http
} from "./chunk-H7VTUQ3B.js";
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

// src/app/core/services/spinner/spinner.service.ts
var SpinnerService;
var init_spinner_service = __esm({
  "src/app/core/services/spinner/spinner.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_esm();
    SpinnerService = class SpinnerService2 {
      http;
      constructor(http) {
        this.http = http;
      }
      _loading = new BehaviorSubject(false);
      loading$ = this._loading.asObservable();
      show() {
        this._loading.next(true);
      }
      hide() {
        this._loading.next(false);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    SpinnerService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], SpinnerService);
  }
});

export {
  SpinnerService,
  init_spinner_service
};
//# sourceMappingURL=chunk-EOPPSJQQ.js.map
