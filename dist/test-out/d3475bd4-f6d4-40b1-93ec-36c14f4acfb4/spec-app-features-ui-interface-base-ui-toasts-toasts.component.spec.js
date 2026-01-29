import {
  BaseComponent,
  BaseStyle,
  CheckIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
  Kt,
  MessageService,
  PrimeTemplate,
  SharedModule,
  TimesCircleIcon,
  TimesIcon,
  a,
  init_dist,
  init_primeng_api,
  init_primeng_base,
  init_primeng_basecomponent,
  init_primeng_icons,
  init_primeng_utils,
  s2 as s,
  zindexutils
} from "./chunk-MWAVVFZJ.js";
import {
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import {
  animate,
  animateChild,
  init_animations,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  FactoryTarget,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewEncapsulation,
  __decorate,
  booleanAttribute,
  core_exports,
  init_core,
  init_tslib_es6,
  inject,
  numberAttribute,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/base-ui/toasts/toasts.component.html
var toasts_component_default;
var init_toasts_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/base-ui/toasts/toasts.component.html"() {
    toasts_component_default = '<div class="page-header">\n  <div class="page-title">\n      <h4>Toastr</h4>\n  </div>\n</div>\n\n<div class="row">\n\n  <!-- Toastr -->\n  <div class="col-xl-4">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Live example\n              </div>\n          </div>\n          <div class="card-body">\n              <p-toast></p-toast>\n              <button type="button" class="btn btn-primary btn-wave" id="liveToastBtn" pButton pRipple\n                  (click)="show()" label="Show">Show live\n                  toast</button>\n              <div class="toast-container position-fixed top-0 end-0 p-3">\n                  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header text-default">\n                          <strong class="me-auto">Toast</strong>\n                          <small>11 mins ago</small>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Hello, world! This is a toast message.\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Color schemes\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast align-items-center text-bg-primary border-0 fade show mb-4" role="alert"\n                  aria-live="assertive" aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is the Primary toast message.\n                      </div>\n                      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"\n                          aria-label="Close"></button>\n                  </div>\n              </div>\n              <div class="toast align-items-center text-bg-secondary border-0 fade show mb-4" role="alert"\n                  aria-live="assertive" aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is the Secondary toast.\n                      </div>\n                      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"\n                          aria-label="Close"></button>\n                  </div>\n              </div>\n              <div class="toast align-items-center text-bg-success border-0 fade show mb-4" role="alert"\n                  aria-live="assertive" aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is the Success toast message.\n                      </div>\n                      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"\n                          aria-label="Close"></button>\n                  </div>\n              </div>\n              <div class="toast align-items-center text-bg-info border-0 fade show" role="alert" aria-live="assertive"\n                  aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is the info toast message.\n                      </div>\n                      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"\n                          aria-label="Close"></button>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Toastr -->\n\n  <!-- Toastr -->\n  <div class="col-xl-4">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Basic example\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n                  <div class="toast-header text-default">\n                      <strong class="me-auto">Toast</strong>\n                      <small>11 mins ago</small>\n                      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                  </div>\n                  <div class="toast-body">\n                      Hello, world! This is a toast message.\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Stacking\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast-container position-static">\n                  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header text-default">\n                          <strong class="me-auto">Toast</strong>\n                          <small class="text-muted">just now</small>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          See? Just like this.\n                      </div>\n                  </div>\n                  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header text-default">\n                          <strong class="me-auto">Toast</strong>\n                          <small class="text-muted">2 seconds ago</small>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Heads up, toasts will stack automatically\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Toastr -->\n\n  <!-- Translucent -->\n  <div class="col-xl-4">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Translucent\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">\n                  <div class="toast-header text-default">\n                      <strong class="me-auto">Toast</strong>\n                      <small class="text-muted">11 mins ago</small>\n                      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                  </div>\n                  <div class="toast-body">\n                      Hello, world! This is a toast message.\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Custom content\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="toast align-items-center fade show mb-3" role="alert" aria-live="assertive"\n                  aria-atomic="true">\n                  <div class="d-flex">\n                      <div class="toast-body">\n                          Hello, world! This is a toast message.\n                      </div>\n                      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">\n                      </button>\n                  </div>\n              </div>\n              <div>\n                  <span class="my-4 text-muted">\n                      Alternatively, you can also add additional controls and components to\n                      toasts.\n                  </span>\n              </div>\n              <div class="toast fade show mt-2" role="alert" aria-live="assertive" aria-atomic="true">\n                  <div class="toast-body">\n                      Hello, world! This is a toast message.\n                      <div class="mt-2 pt-2 border-top">\n                          <button type="button" class="btn btn-primary btn-sm btn-wave me-1">Take\n                              action</button>\n                          <button type="button" class="btn btn-secondary btn-sm btn-wave"\n                              data-bs-dismiss="toast">Close</button>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Translucent -->\n\n</div>\n\n<div class="row">\n\n  <!-- Color Variants Live -->\n  <div class="col-xl-6">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Color Variants Live\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="btn-list">\n                  <button type="button" (click)="showPrimaryColor()" class="btn btn-primary-light me-2 btn-wave"\n                      id="primaryToastBtn">Primary</button>\n                  <p-toast key="toast1"></p-toast>\n                  <button type="button" (click)="showSecondaryColor()" class="btn btn-secondary-light me-2 btn-wave"\n                      id="secondaryToastBtn">secondary</button>\n                  <p-toast key="toast2"></p-toast>\n                  <button type="button" (click)="showWarningColor()" class="btn btn-warning-light me-2 btn-wave"\n                      id="warningToastBtn">warning</button>\n                  <p-toast key="toast3"></p-toast>\n                  <button type="button" (click)="showInfoColor()" class="btn btn-info-light me-2 btn-wave"\n                      id="infoToastBtn">info</button>\n                  <p-toast key="toast4"></p-toast>\n                  <button type="button" (click)="showSuccessColor()" class="btn btn-success-light me-2 btn-wave"\n                      id="successToastBtn">success</button>\n                  <p-toast key="toast5"></p-toast>\n                  <button type="button" (click)="showDangerColor()" class="btn btn-danger-light me-2 btn-wave"\n                      id="dangerToastBtn">danger</button>\n                  <p-toast key="toast6"></p-toast>\n              </div>\n              <div class="toast-container position-fixed top-0 end-0 p-3">\n                  <div id="primaryToast" class="toast colored-toast bg-primary-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="secondaryToast" class="toast colored-toast bg-secondary-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-secondary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="warningToast" class="toast colored-toast bg-warning-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-warning text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="infoToast" class="toast colored-toast bg-info-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-info text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="successToast" class="toast colored-toast bg-success-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-success text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="dangerToast" class="toast colored-toast bg-danger-transparent" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-danger text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Color Variants Live -->\n\n  <!-- Solid Background Toasts -->\n  <div class="col-xl-6">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Solid Background Toasts\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="btn-list">\n                  <button type="button" (click)="showPrimaryBackground()" class="btn btn-primary me-2 btn-wave"\n                      id="solidprimaryToastBtn">Primary</button>\n                  <button type="button" (click)="showSecondaryBackground()" class="btn btn-secondary me-2 btn-wave"\n                      id="solidsecondaryToastBtn">secondary</button>\n                  <button type="button" (click)="showWarningBackground()" class="btn btn-warning me-2 btn-wave"\n                      id="solidwarningToastBtn">warning</button>\n                  <button type="button" (click)="showInfoBackground()" class="btn btn-info me-2 btn-wave"\n                      id="solidinfoToastBtn">info</button>\n                  <button type="button" (click)="showSuccessBackground()" class="btn btn-success me-2 btn-wave"\n                      id="solidsuccessToastBtn">success</button>\n                  <button type="button" (click)="showDangerBackground()" class="btn btn-danger me-2 btn-wave"\n                      id="soliddangerToastBtn">danger</button>\n              </div>\n              <div class="toast-container position-fixed top-0 end-0 p-3">\n                  <div id="solid-primaryToast" class="toast colored-toast bg-primary text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-secondaryToast" class="toast colored-toast bg-secondary text-fixed-white"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-secondary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-warningToast" class="toast colored-toast bg-warning text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-warning text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-infoToast" class="toast colored-toast bg-info text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-info text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-successToast" class="toast colored-toast bg-success text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-success text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n                  <div id="solid-dangerToast" class="toast colored-toast bg-danger text-fixed-white" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-danger text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /Solid Background Toasts -->\n\n</div>\n\n<!-- Toast Placements -->\n<div class="row">\n  <div class="col-xl-12">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Toast Placements\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="btn-list">\n                  <button type="button" (click)="showTopLeft()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="topleftToastBtn">Top\n                      Left</button>\n                  <p-toast position="top-left" key="tl"></p-toast>\n\n                  <button type="button" (click)="showTopCenter()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="topcenterToastBtn">Top\n                      Center</button>\n                  <p-toast position="top-center" key="tc"></p-toast>\n\n                  <button type="button" (click)="showTopRight()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="toprightToastBtn">Top\n                      Right</button>\n                  <p-toast position="top-right" key="tr"></p-toast>\n\n                  <!-- <button type="button" (click)="showMiddleLeft()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="middleleftToastBtn">\n                      Middle Left\n                  </button>\n                  <p-toast class="custom-toast middle-left-toast"></p-toast>\n\n                  <button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlecenterToastBtn">Middle\n                      Center</button>\n                  <p-toast position="top-center" key="ml"></p-toast>\n\n                  <button type="button" class="btn btn-outline-primary me-2 btn-wave" id="middlerightToastBtn">Middle\n                      Right</button>\n                  <p-toast position="top-center" key="tc"></p-toast> -->\n\n                  <button type="button" (click)="showBottomLeft()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="bottomleftToastBtn">Bottom\n                      Left</button>\n                  <p-toast position="bottom-left" key="bl"></p-toast>\n\n                  <button type="button" (click)="showBottomCenter()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="bottomcenterToastBtn">Bottom\n                      Center</button>\n                  <p-toast position="bottom-center" key="bc"></p-toast>\n\n                  <button type="button" (click)="showBottomRight()" class="btn btn-outline-primary me-2 btn-wave"\n                      id="bottomrightToastBtn">Bottom\n                      Right</button>\n                  <p-toast position="bottom-right" key="br"></p-toast>\n\n              </div>\n              <div class="toast-container position-fixed top-0 start-0 p-3">\n                  <div id="topleft-Toast" class="toast colored-toast bg-primary-transparent text-primary" role="alert"\n                      aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-0 start-50 translate-middle-x p-3">\n                  <div id="topcenter-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-0 end-0 p-3">\n                  <div id="topright-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-50 start-0 translate-middle-y p-3">\n                  <div id="middleleft-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-50 start-50 translate-middle">\n                  <div id="middlecenter-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed top-50 end-0 translate-middle-y p-3">\n                  <div id="middleright-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed bottom-0 start-0 p-3">\n                  <div id="bottomleft-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">\n                  <div id="bottomcenter-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n              <div class="toast-container position-fixed bottom-0 end-0 p-3">\n                  <div id="bottomright-Toast" class="toast colored-toast bg-primary-transparent text-primary"\n                      role="alert" aria-live="assertive" aria-atomic="true">\n                      <div class="toast-header bg-primary text-fixed-white">\n                          <strong class="me-auto">Toast</strong>\n                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                      </div>\n                      <div class="toast-body">\n                          Your,toast message here.\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- Toast Placements -->\n\n<!-- Aligning Toast Using Flexbox -->\n<div class="row">\n  <div class="col-xl-12">\n      <div class="card">\n          <div class="card-header justify-content-between">\n              <div class="card-title">\n                  Aligning Toast Using Flexbox\n              </div>\n          </div>\n          <div class="card-body">\n              <div class="bd-example bd-example-toasts d-flex p-2">\n                  <div aria-live="polite" aria-atomic="true"\n                      class="d-flex justify-content-center align-items-center w-100">\n                      <div class="toast fade show shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">\n                          <div class="toast-header text-default">\n                              <strong class="me-auto">Toast</strong>\n                              <small>11 mins ago</small>\n                              <button type="button" class="btn-close" data-bs-dismiss="toast"\n                                  aria-label="Close"></button>\n                          </div>\n                          <div class="toast-body">\n                              Hello, world! This is a toast message.\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- Aligning Toast Using Flexbox -->';
  }
});

// angular:jit:style:src/app/features/ui-interface/base-ui/toasts/toasts.component.scss
var toasts_component_default2;
var init_toasts_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/base-ui/toasts/toasts.component.scss"() {
    toasts_component_default2 = "/* src/app/features/ui-interface/base-ui/toasts/toasts.component.scss */\n/*# sourceMappingURL=toasts.component.css.map */\n";
  }
});

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style2;
var init_toast = __esm({
  "node_modules/@primeuix/styles/dist/toast/index.mjs"() {
    "use strict";
    style2 = "\n    .p-toast {\n        width: dt('toast.width');\n        white-space: pre-line;\n        word-break: break-word;\n    }\n\n    .p-toast-message {\n        margin: 0 0 1rem 0;\n    }\n\n    .p-toast-message-icon {\n        flex-shrink: 0;\n        font-size: dt('toast.icon.size');\n        width: dt('toast.icon.size');\n        height: dt('toast.icon.size');\n    }\n\n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n        padding: dt('toast.content.padding');\n        gap: dt('toast.content.gap');\n    }\n\n    .p-toast-message-text {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        gap: dt('toast.text.gap');\n    }\n\n    .p-toast-summary {\n        font-weight: dt('toast.summary.font.weight');\n        font-size: dt('toast.summary.font.size');\n    }\n\n    .p-toast-detail {\n        font-weight: dt('toast.detail.font.weight');\n        font-size: dt('toast.detail.font.size');\n    }\n\n    .p-toast-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        background: transparent;\n        transition:\n            background dt('toast.transition.duration'),\n            color dt('toast.transition.duration'),\n            outline-color dt('toast.transition.duration'),\n            box-shadow dt('toast.transition.duration');\n        outline-color: transparent;\n        color: inherit;\n        width: dt('toast.close.button.width');\n        height: dt('toast.close.button.height');\n        border-radius: dt('toast.close.button.border.radius');\n        margin: -25% 0 0 0;\n        right: -25%;\n        padding: 0;\n        border: none;\n        user-select: none;\n    }\n\n    .p-toast-close-button:dir(rtl) {\n        margin: -25% 0 0 auto;\n        left: -25%;\n        right: auto;\n    }\n\n    .p-toast-message-info,\n    .p-toast-message-success,\n    .p-toast-message-warn,\n    .p-toast-message-error,\n    .p-toast-message-secondary,\n    .p-toast-message-contrast {\n        border-width: dt('toast.border.width');\n        border-style: solid;\n        backdrop-filter: blur(dt('toast.blur'));\n        border-radius: dt('toast.border.radius');\n    }\n\n    .p-toast-close-icon {\n        font-size: dt('toast.close.icon.size');\n        width: dt('toast.close.icon.size');\n        height: dt('toast.close.icon.size');\n    }\n\n    .p-toast-close-button:focus-visible {\n        outline-width: dt('focus.ring.width');\n        outline-style: dt('focus.ring.style');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-toast-message-info {\n        background: dt('toast.info.background');\n        border-color: dt('toast.info.border.color');\n        color: dt('toast.info.color');\n        box-shadow: dt('toast.info.shadow');\n    }\n\n    .p-toast-message-info .p-toast-detail {\n        color: dt('toast.info.detail.color');\n    }\n\n    .p-toast-message-info .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.info.close.button.focus.ring.color');\n        box-shadow: dt('toast.info.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-info .p-toast-close-button:hover {\n        background: dt('toast.info.close.button.hover.background');\n    }\n\n    .p-toast-message-success {\n        background: dt('toast.success.background');\n        border-color: dt('toast.success.border.color');\n        color: dt('toast.success.color');\n        box-shadow: dt('toast.success.shadow');\n    }\n\n    .p-toast-message-success .p-toast-detail {\n        color: dt('toast.success.detail.color');\n    }\n\n    .p-toast-message-success .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.success.close.button.focus.ring.color');\n        box-shadow: dt('toast.success.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-success .p-toast-close-button:hover {\n        background: dt('toast.success.close.button.hover.background');\n    }\n\n    .p-toast-message-warn {\n        background: dt('toast.warn.background');\n        border-color: dt('toast.warn.border.color');\n        color: dt('toast.warn.color');\n        box-shadow: dt('toast.warn.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-detail {\n        color: dt('toast.warn.detail.color');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.warn.close.button.focus.ring.color');\n        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:hover {\n        background: dt('toast.warn.close.button.hover.background');\n    }\n\n    .p-toast-message-error {\n        background: dt('toast.error.background');\n        border-color: dt('toast.error.border.color');\n        color: dt('toast.error.color');\n        box-shadow: dt('toast.error.shadow');\n    }\n\n    .p-toast-message-error .p-toast-detail {\n        color: dt('toast.error.detail.color');\n    }\n\n    .p-toast-message-error .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.error.close.button.focus.ring.color');\n        box-shadow: dt('toast.error.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-error .p-toast-close-button:hover {\n        background: dt('toast.error.close.button.hover.background');\n    }\n\n    .p-toast-message-secondary {\n        background: dt('toast.secondary.background');\n        border-color: dt('toast.secondary.border.color');\n        color: dt('toast.secondary.color');\n        box-shadow: dt('toast.secondary.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-detail {\n        color: dt('toast.secondary.detail.color');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.secondary.close.button.focus.ring.color');\n        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:hover {\n        background: dt('toast.secondary.close.button.hover.background');\n    }\n\n    .p-toast-message-contrast {\n        background: dt('toast.contrast.background');\n        border-color: dt('toast.contrast.border.color');\n        color: dt('toast.contrast.color');\n        box-shadow: dt('toast.contrast.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-detail {\n        color: dt('toast.contrast.detail.color');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.contrast.close.button.focus.ring.color');\n        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:hover {\n        background: dt('toast.contrast.close.button.hover.background');\n    }\n\n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n\n    .p-toast-message-enter-from {\n        opacity: 0;\n        transform: translateY(50%);\n    }\n\n    .p-toast-message-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toast .p-toast-message.p-toast-message-leave-to {\n        max-height: 0;\n        opacity: 0;\n        margin-bottom: 0;\n        overflow: hidden;\n    }\n\n    .p-toast-message-enter-active {\n        transition:\n            transform 0.3s,\n            opacity 0.3s;\n    }\n\n    .p-toast-message-leave-active {\n        transition:\n            max-height 0.45s cubic-bezier(0, 1, 0, 1),\n            opacity 0.3s,\n            margin-bottom 0.3s;\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-toast.mjs
var inlineStyles, classes, ToastStyle, ToastClasses, ToastItem, Toast, ToastModule;
var init_primeng_toast = __esm({
  "node_modules/primeng/fesm2022/primeng-toast.mjs"() {
    "use strict";
    init_animations();
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_icons();
    init_primeng_utils();
    init_toast();
    init_primeng_base();
    inlineStyles = {
      root: ({ instance }) => {
        const { _position } = instance;
        return {
          position: "fixed",
          top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
          right: (_position === "top-right" || _position === "bottom-right") && "20px",
          bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
          left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
        };
      }
    };
    classes = {
      root: ({ instance }) => ["p-toast p-component", `p-toast-${instance._position}`],
      message: ({ instance }) => ({
        "p-toast-message": true,
        "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
        "p-toast-message-warn": instance.message.severity === "warn",
        "p-toast-message-error": instance.message.severity === "error",
        "p-toast-message-success": instance.message.severity === "success",
        "p-toast-message-secondary": instance.message.severity === "secondary",
        "p-toast-message-contrast": instance.message.severity === "contrast"
      }),
      messageContent: "p-toast-message-content",
      messageIcon: ({ instance }) => ({
        "p-toast-message-icon": true,
        [`pi ${instance.message.icon}`]: !!instance.message.icon
      }),
      messageText: "p-toast-message-text",
      summary: "p-toast-summary",
      detail: "p-toast-detail",
      closeButton: "p-toast-close-button",
      closeIcon: ({ instance }) => ({
        "p-toast-close-icon": true,
        [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
      })
    };
    ToastStyle = class _ToastStyle extends BaseStyle {
      name = "toast";
      theme = style2;
      classes = classes;
      inlineStyles = inlineStyles;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ToastStyle, decorators: [{
      type: Injectable
    }] });
    (function(ToastClasses2) {
      ToastClasses2["root"] = "p-toast";
      ToastClasses2["message"] = "p-toast-message";
      ToastClasses2["messageContent"] = "p-toast-message-content";
      ToastClasses2["messageIcon"] = "p-toast-message-icon";
      ToastClasses2["messageText"] = "p-toast-message-text";
      ToastClasses2["summary"] = "p-toast-summary";
      ToastClasses2["detail"] = "p-toast-detail";
      ToastClasses2["closeButton"] = "p-toast-close-button";
      ToastClasses2["closeIcon"] = "p-toast-close-icon";
    })(ToastClasses || (ToastClasses = {}));
    ToastItem = class _ToastItem extends BaseComponent {
      zone;
      message;
      index;
      life;
      template;
      headlessTemplate;
      showTransformOptions;
      hideTransformOptions;
      showTransitionOptions;
      hideTransitionOptions;
      onClose = new EventEmitter();
      _componentStyle = inject(ToastStyle);
      timeout;
      constructor(zone) {
        super();
        this.zone = zone;
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        this.initTimeout();
      }
      initTimeout() {
        if (!this.message?.sticky) {
          this.zone.runOutsideAngular(() => {
            this.timeout = setTimeout(() => {
              this.onClose.emit({
                index: this.index,
                message: this.message
              });
            }, this.message?.life || this.life || 3e3);
          });
        }
      }
      clearTimeout() {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
      }
      onMouseEnter() {
        this.clearTimeout();
      }
      onMouseLeave() {
        this.initTimeout();
      }
      onCloseIconClick = (event) => {
        this.clearTimeout();
        this.onClose.emit({
          index: this.index,
          message: this.message
        });
        event.preventDefault();
      };
      get closeAriaLabel() {
        return this.config.translation.aria ? this.config.translation.aria.close : void 0;
      }
      ngOnDestroy() {
        this.clearTimeout();
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastItem, deps: [{ token: NgZone }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.1.3", type: _ToastItem, isStandalone: true, selector: "p-toastItem", inputs: { message: "message", index: ["index", "index", numberAttribute], life: ["life", "life", numberAttribute], template: "template", headlessTemplate: "headlessTemplate", showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, outputs: { onClose: "onClose" }, providers: [ToastStyle], usesInheritance: true, ngImport: core_exports, template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="cn(cx('message'), message?.styleClass)"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [class]="cn(cx('messageContent'), message?.contentStyleClass)" [attr.data-pc-section]="'content'">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('info') {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('error') {
                                    <svg data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('warn') {
                                    <svg data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @default {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                            }
                        }
                        <div [ngClass]="cx('messageText')" [attr.data-pc-section]="'text'">
                            <div [ngClass]="cx('summary')" [attr.data-pc-section]="'summary'">
                                {{ message.summary }}
                            </div>
                            <div [ngClass]="cx('detail')" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button type="button" [attr.class]="cx('closeButton')" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [attr.aria-label]="closeAriaLabel" [attr.data-pc-section]="'closebutton'" autofocus>
                                @if (message.closeIcon) {
                                    <span *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
                                } @else {
                                    <svg data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: CheckIcon, selector: '[data-p-icon="check"]' }, { kind: "component", type: ExclamationTriangleIcon, selector: '[data-p-icon="exclamation-triangle"]' }, { kind: "component", type: InfoCircleIcon, selector: '[data-p-icon="info-circle"]' }, { kind: "component", type: TimesIcon, selector: '[data-p-icon="times"]' }, { kind: "component", type: TimesCircleIcon, selector: '[data-p-icon="times-circle"]' }, { kind: "ngmodule", type: SharedModule }], animations: [
        trigger("messageState", [
          state("visible", style({
            transform: "translateY(0)",
            opacity: 1
          })),
          transition("void => *", [
            style({
              transform: "{{showTransformParams}}",
              opacity: 0
            }),
            animate("{{showTransitionParams}}")
          ]),
          transition("* => void", [
            animate("{{hideTransitionParams}}", style({
              height: 0,
              opacity: 0,
              transform: "{{hideTransformParams}}"
            }))
          ])
        ])
      ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ToastItem, decorators: [{
      type: Component,
      args: [{
        selector: "p-toastItem",
        standalone: true,
        imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
        template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="cn(cx('message'), message?.styleClass)"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [class]="cn(cx('messageContent'), message?.contentStyleClass)" [attr.data-pc-section]="'content'">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('info') {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('error') {
                                    <svg data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('warn') {
                                    <svg data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @default {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                            }
                        }
                        <div [ngClass]="cx('messageText')" [attr.data-pc-section]="'text'">
                            <div [ngClass]="cx('summary')" [attr.data-pc-section]="'summary'">
                                {{ message.summary }}
                            </div>
                            <div [ngClass]="cx('detail')" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button type="button" [attr.class]="cx('closeButton')" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [attr.aria-label]="closeAriaLabel" [attr.data-pc-section]="'closebutton'" autofocus>
                                @if (message.closeIcon) {
                                    <span *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
                                } @else {
                                    <svg data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
        animations: [
          trigger("messageState", [
            state("visible", style({
              transform: "translateY(0)",
              opacity: 1
            })),
            transition("void => *", [
              style({
                transform: "{{showTransformParams}}",
                opacity: 0
              }),
              animate("{{showTransitionParams}}")
            ]),
            transition("* => void", [
              animate("{{hideTransitionParams}}", style({
                height: 0,
                opacity: 0,
                transform: "{{hideTransformParams}}"
              }))
            ])
          ])
        ],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ToastStyle]
      }]
    }], ctorParameters: () => [{ type: NgZone }], propDecorators: { message: [{
      type: Input
    }], index: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], life: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], template: [{
      type: Input
    }], headlessTemplate: [{
      type: Input
    }], showTransformOptions: [{
      type: Input
    }], hideTransformOptions: [{
      type: Input
    }], showTransitionOptions: [{
      type: Input
    }], hideTransitionOptions: [{
      type: Input
    }], onClose: [{
      type: Output
    }] } });
    Toast = class _Toast extends BaseComponent {
      /**
       * Key of the message in case message is targeted to a specific toast component.
       * @group Props
       */
      key;
      /**
       * Whether to automatically manage layering.
       * @group Props
       */
      autoZIndex = true;
      /**
       * Base zIndex value to use in layering.
       * @group Props
       */
      baseZIndex = 0;
      /**
       * The default time to display messages for in milliseconds.
       * @group Props
       */
      life = 3e3;
      /**
       * Inline class of the component.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Position of the toast in viewport.
       * @group Props
       */
      get position() {
        return this._position;
      }
      set position(value) {
        this._position = value;
        this.cd.markForCheck();
      }
      /**
       * It does not add the new message if there is already a toast displayed with the same content
       * @group Props
       */
      preventOpenDuplicates = false;
      /**
       * Displays only once a message with the same content.
       * @group Props
       */
      preventDuplicates = false;
      /**
       * Transform options of the show animation.
       * @group Props
       */
      showTransformOptions = "translateY(100%)";
      /**
       * Transform options of the hide animation.
       * @group Props
       */
      hideTransformOptions = "translateY(-100%)";
      /**
       * Transition options of the show animation.
       * @group Props
       */
      showTransitionOptions = "300ms ease-out";
      /**
       * Transition options of the hide animation.
       * @group Props
       */
      hideTransitionOptions = "250ms ease-in";
      /**
       * Object literal to define styles per screen size.
       * @group Props
       */
      breakpoints;
      /**
       * Callback to invoke when a message is closed.
       * @param {ToastCloseEvent} event - custom close event.
       * @group Emits
       */
      onClose = new EventEmitter();
      /**
       * Custom template of message.
       * @group Templates
       */
      template;
      /**
       * Custom headless template.
       * @group Templates
       */
      headlessTemplate;
      messageSubscription;
      clearSubscription;
      messages;
      messagesArchieve;
      _position = "top-right";
      messageService = inject(MessageService);
      _componentStyle = inject(ToastStyle);
      styleElement;
      id = s("pn_id_");
      templates;
      constructor() {
        super();
      }
      ngOnInit() {
        super.ngOnInit();
        this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
          if (messages) {
            if (Array.isArray(messages)) {
              const filteredMessages = messages.filter((m) => this.canAdd(m));
              this.add(filteredMessages);
            } else if (this.canAdd(messages)) {
              this.add([messages]);
            }
          }
        });
        this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
          if (key) {
            if (this.key === key) {
              this.messages = null;
            }
          } else {
            this.messages = null;
          }
          this.cd.markForCheck();
        });
      }
      _template;
      _headlessTemplate;
      ngAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "message":
              this._template = item.template;
              break;
            case "headless":
              this._headlessTemplate = item.template;
              break;
            default:
              this._template = item.template;
              break;
          }
        });
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.breakpoints) {
          this.createStyle();
        }
      }
      add(messages) {
        this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
        if (this.preventDuplicates) {
          this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
        }
        this.cd.markForCheck();
      }
      canAdd(message) {
        let allow = this.key === message.key;
        if (allow && this.preventOpenDuplicates) {
          allow = !this.containsMessage(this.messages, message);
        }
        if (allow && this.preventDuplicates) {
          allow = !this.containsMessage(this.messagesArchieve, message);
        }
        return allow;
      }
      containsMessage(collection, message) {
        if (!collection) {
          return false;
        }
        return collection.find((m) => {
          return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
        }) != null;
      }
      onMessageClose(event) {
        this.messages?.splice(event.index, 1);
        this.onClose.emit({
          message: event.message
        });
        this.cd.detectChanges();
      }
      onAnimationStart(event) {
        if (event.fromState === "void") {
          this.renderer.setAttribute(this.el?.nativeElement, this.id, "");
          if (this.autoZIndex && this.el?.nativeElement.style.zIndex === "") {
            zindexutils.set("modal", this.el?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
          }
        }
      }
      onAnimationEnd(event) {
        if (event.toState === "void") {
          if (this.autoZIndex && a(this.messages)) {
            zindexutils.clear(this.el?.nativeElement);
          }
        }
      }
      createStyle() {
        if (!this.styleElement) {
          this.styleElement = this.renderer.createElement("style");
          this.styleElement.type = "text/css";
          this.renderer.appendChild(this.document.head, this.styleElement);
          let innerHTML = "";
          for (let breakpoint in this.breakpoints) {
            let breakpointStyle = "";
            for (let styleProp in this.breakpoints[breakpoint]) {
              breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
            }
            innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
          }
          this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
          Kt(this.styleElement, "nonce", this.config?.csp()?.nonce);
        }
      }
      destroyStyle() {
        if (this.styleElement) {
          this.renderer.removeChild(this.document.head, this.styleElement);
          this.styleElement = null;
        }
      }
      ngOnDestroy() {
        if (this.messageSubscription) {
          this.messageSubscription.unsubscribe();
        }
        if (this.el && this.autoZIndex) {
          zindexutils.clear(this.el.nativeElement);
        }
        if (this.clearSubscription) {
          this.clearSubscription.unsubscribe();
        }
        this.destroyStyle();
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Toast, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.1.3", type: _Toast, isStandalone: true, selector: "p-toast", inputs: { key: "key", autoZIndex: ["autoZIndex", "autoZIndex", booleanAttribute], baseZIndex: ["baseZIndex", "baseZIndex", numberAttribute], life: ["life", "life", numberAttribute], styleClass: "styleClass", position: "position", preventOpenDuplicates: ["preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute], preventDuplicates: ["preventDuplicates", "preventDuplicates", booleanAttribute], showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", breakpoints: "breakpoints" }, outputs: { onClose: "onClose" }, host: { properties: { "class": "cn(cx('root'), styleClass)", "style": "sx('root')" } }, providers: [ToastStyle], queries: [{ propertyName: "template", first: true, predicate: ["message"], descendants: true }, { propertyName: "headlessTemplate", first: true, predicate: ["headless"], descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, ngImport: core_exports, template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            (onClose)="onMessageClose($event)"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            @toastAnimation
            (@toastAnimation.start)="onAnimationStart($event)"
            (@toastAnimation.done)="onAnimationEnd($event)"
            [showTransformOptions]="showTransformOptions"
            [hideTransformOptions]="hideTransformOptions"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
        ></p-toastItem>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: ToastItem, selector: "p-toastItem", inputs: ["message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onClose"] }, { kind: "ngmodule", type: SharedModule }], animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Toast, decorators: [{
      type: Component,
      args: [{
        selector: "p-toast",
        standalone: true,
        imports: [CommonModule, ToastItem, SharedModule],
        template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            (onClose)="onMessageClose($event)"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            @toastAnimation
            (@toastAnimation.start)="onAnimationStart($event)"
            (@toastAnimation.done)="onAnimationEnd($event)"
            [showTransformOptions]="showTransformOptions"
            [hideTransformOptions]="hideTransformOptions"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
        ></p-toastItem>
    `,
        animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [ToastStyle],
        host: {
          "[class]": "cn(cx('root'), styleClass)",
          "[style]": "sx('root')"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { key: [{
      type: Input
    }], autoZIndex: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], baseZIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], life: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], styleClass: [{
      type: Input
    }], position: [{
      type: Input
    }], preventOpenDuplicates: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], preventDuplicates: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showTransformOptions: [{
      type: Input
    }], hideTransformOptions: [{
      type: Input
    }], showTransitionOptions: [{
      type: Input
    }], hideTransitionOptions: [{
      type: Input
    }], breakpoints: [{
      type: Input
    }], onClose: [{
      type: Output
    }], template: [{
      type: ContentChild,
      args: ["message"]
    }], headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    ToastModule = class _ToastModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastModule, imports: [Toast, SharedModule], exports: [Toast, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastModule, imports: [Toast, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ToastModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Toast, SharedModule],
        exports: [Toast, SharedModule]
      }]
    }] });
  }
});

// src/app/features/ui-interface/base-ui/toasts/toasts.component.ts
var ToastsComponent;
var init_toasts_component3 = __esm({
  "src/app/features/ui-interface/base-ui/toasts/toasts.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_toasts_component();
    init_toasts_component2();
    init_core();
    init_core_index();
    init_primeng_api();
    init_primeng_toast();
    init_common();
    ToastsComponent = class ToastsComponent2 {
      messageService;
      routes = routes;
      constructor(messageService) {
        this.messageService = messageService;
      }
      show() {
        this.messageService.add({
          summary: "Toast",
          detail: "Hello, world! This is a toast message."
        });
      }
      showPrimaryColor() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-light-popover"
        });
      }
      showSecondaryColor() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "secondary-light-popover"
        });
      }
      showWarningColor() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-light-popover"
        });
      }
      showInfoColor() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "info-light-popover"
        });
      }
      showSuccessColor() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "success-light-popover"
        });
      }
      showDangerColor() {
        this.messageService.add({
          summary: "Error",
          detail: "Your,toast message here.",
          styleClass: "danger-light-popover"
        });
      }
      showPrimaryBackground() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-background-popover"
        });
      }
      showSecondaryBackground() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "secondary-background-popover"
        });
      }
      showWarningBackground() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "warning-background-popover"
        });
      }
      showInfoBackground() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "info-background-popover"
        });
      }
      showSuccessBackground() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "success-background-popover"
        });
      }
      showDangerBackground() {
        this.messageService.add({
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "danger-background-popover"
        });
      }
      showTopLeft() {
        this.messageService.add({
          key: "tl",
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-light-popover"
        });
      }
      showTopCenter() {
        this.messageService.add({
          key: "tc",
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-light-popover"
        });
      }
      showTopRight() {
        this.messageService.add({
          key: "tr",
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-light-popover"
        });
      }
      showMiddleLeft() {
        this.messageService.add({
          key: "ml",
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-light-popover"
        });
      }
      showBottomLeft() {
        this.messageService.add({
          key: "bl",
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-light-popover"
        });
      }
      showBottomCenter() {
        this.messageService.add({
          key: "bc",
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-light-popover"
        });
      }
      showBottomRight() {
        this.messageService.add({
          key: "br",
          summary: "Toast",
          detail: "Your,toast message here.",
          styleClass: "primary-light-popover"
        });
      }
      static ctorParameters = () => [
        { type: MessageService }
      ];
    };
    ToastsComponent = __decorate([
      Component({
        selector: "app-toasts",
        template: toasts_component_default,
        providers: [MessageService],
        imports: [CommonModule, ToastModule],
        styles: [toasts_component_default2]
      })
    ], ToastsComponent);
  }
});

// src/app/features/ui-interface/base-ui/toasts/toasts.component.spec.ts
var require_toasts_component_spec = __commonJS({
  "src/app/features/ui-interface/base-ui/toasts/toasts.component.spec.ts"(exports) {
    init_testing();
    init_toasts_component3();
    describe("ToastsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [ToastsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ToastsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_toasts_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-base-ui-toasts-toasts.component.spec.js.map
