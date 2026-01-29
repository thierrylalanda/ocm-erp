import {
  AuthService,
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import {
  Router,
  init_router
} from "./chunk-EDGRTZKC.js";
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
  init_core,
  init_esm,
  init_tslib_es6,
  of,
  switchMap
} from "./chunk-W6MIRXHE.js";
import "./chunk-FWMZPJRE.js";

// src/app/core/guards/loggedIn/logged-in.guard.spec.ts
init_testing();

// src/app/core/guards/loggedIn/logged-in.guard.ts
init_tslib_es6();
init_core();
init_router();
init_esm();
init_core_index();
var LoggedInGuard = class LoggedInGuard2 {
  router;
  authService;
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Can activate
   *
   * @param route
   * @param state
   */
  canActivate(route, state) {
    const redirectUrl = state.url === routes.login ? routes.login : state.url;
    return this._check(redirectUrl);
  }
  /**
     * Can activate child
     *
     * @param childRoute
     * @param state
     */
  canActivateChild(childRoute, state) {
    const redirectUrl = state.url === routes.login ? routes.login : state.url;
    return this._check(redirectUrl);
  }
  /**
   * Can load
   *
   * @param route
   * @param segments
   */
  canLoad(route, segments) {
    return this._check("/");
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Check the authenticated status
   *
   * @param redirectURL
   * @private
   */
  _check(redirectURL) {
    return this.authService.check().pipe(switchMap((authenticated) => {
      if (!authenticated) {
        this.router.navigate([routes.login], { queryParams: { redirectURL } });
        return of(false);
      }
      return of(true);
    }));
  }
  static ctorParameters = () => [
    { type: Router },
    { type: AuthService }
  ];
};
LoggedInGuard = __decorate([
  Injectable({
    providedIn: "root"
  })
], LoggedInGuard);

// src/app/core/guards/loggedIn/logged-in.guard.spec.ts
describe("LoggedInGuard", () => {
  let guard;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedInGuard);
  });
  it("should be created", () => {
    expect(guard).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-core-guards-loggedIn-logged-in.guard.spec.js.map
