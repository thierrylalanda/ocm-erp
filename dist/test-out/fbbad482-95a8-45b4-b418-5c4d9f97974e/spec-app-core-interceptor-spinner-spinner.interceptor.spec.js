import {
  init_core_index
} from "./chunk-SDAHDEJE.js";
import "./chunk-2O5UQ647.js";
import {
  SpinnerService
} from "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Injectable,
  __decorate,
  catchError,
  finalize,
  init_core,
  init_esm,
  init_tslib_es6,
  throwError
} from "./chunk-W6MIRXHE.js";
import "./chunk-FWMZPJRE.js";

// src/app/core/interceptor/spinner/spinner.interceptor.spec.ts
init_testing();

// src/app/core/interceptor/spinner/spinner.interceptor.ts
init_tslib_es6();
init_core();
init_esm();
init_core_index();
var SpinnerInterceptor = class SpinnerInterceptor2 {
  spinner;
  constructor(spinner) {
    this.spinner = spinner;
  }
  intercept(request, next) {
    this.spinner.show();
    return next.handle(request).pipe(finalize(() => {
      this.spinner.hide();
    }), catchError((error) => {
      if (error) {
        this.spinner.hide();
      }
      return throwError(error);
    }));
  }
  static ctorParameters = () => [
    { type: SpinnerService }
  ];
};
SpinnerInterceptor = __decorate([
  Injectable()
], SpinnerInterceptor);

// src/app/core/interceptor/spinner/spinner.interceptor.spec.ts
describe("SpinnerInterceptor", () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SpinnerInterceptor
    ]
  }));
  it("should be created", () => {
    const interceptor = TestBed.inject(SpinnerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-core-interceptor-spinner-spinner.interceptor.spec.js.map
