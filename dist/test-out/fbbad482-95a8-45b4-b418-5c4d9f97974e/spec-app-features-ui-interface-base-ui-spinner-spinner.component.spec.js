import {
  CommonModule,
  init_common
} from "./chunk-HQHIWYWO.js";
import "./chunk-PV6FWBJN.js";
import {
  TestBed,
  init_testing
} from "./chunk-SXCZ3RJK.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W6MIRXHE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-FWMZPJRE.js";

// angular:jit:template:src/app/features/ui-interface/base-ui/spinner/spinner.component.html
var spinner_component_default;
var init_spinner_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/base-ui/spinner/spinner.component.html"() {
    spinner_component_default = '			<!-- Start Content -->\n      <div class="">\n\n        <!-- Page Header -->\n        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n            <div class="flex-grow-1">\n                <h4 class="fs-18 fw-semibold mb-0">Spinners</h4>\n            </div>\n\n            <div class="text-end">\n                <ol class="breadcrumb m-0 py-0">\n                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n                    <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>\n                    <li class="breadcrumb-item active">Spinners</li>\n                </ol>\n            </div>\n        </div>\n<!-- End page header -->\n        \n        <div class="row">\n\n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Border Spinner</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Use the border spinners for a lightweight loading indicator.</p>\n\n                        <div class="spinner-border m-2" role="status">\n                            <span class="visually-hidden">Loading...</span>\n                        </div>\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n  \n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Colors</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>You can use any of our text color utilities on the standard spinner.</p>\n\n                        <div class="spinner-border text-primary m-2" role="status"></div>\n                        <div class="spinner-border text-secondary m-2" role="status"></div>\n                        <div class="spinner-border text-success m-2" role="status"></div>\n                        <div class="spinner-border text-danger m-2" role="status"></div>\n                        <div class="spinner-border text-warning m-2" role="status"></div>\n                        <div class="spinner-border text-info m-2" role="status"></div>\n                        <div class="spinner-border text-light m-2" role="status"></div>\n                        <div class="spinner-border text-dark m-2" role="status"></div>\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n</div> <!-- end row -->\n        \n        <div class="row">\n\n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Growing Spinner</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>If you don\u2019t fancy a border spinner, switch to the grow spinner. While it doesn\u2019t technically spin, it does repeatedly grow!</p>\n\n                        <div class="spinner-grow m-2" role="status">\n                            <span class="visually-hidden">Loading...</span>\n                        </div>\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n  \n            <div class="col-xl-6">\n\n                <div class="card card-h-100">\n                    <div class="card-header">\n                        <h5 class="card-title">Color Growing Spinner</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>You can use any of our text color utilities on the standard spinner.</p>\n\n                        <div class="spinner-grow text-primary m-2" role="status"></div>\n                        <div class="spinner-grow text-secondary m-2" role="status"></div>\n                        <div class="spinner-grow text-success m-2" role="status"></div>\n                        <div class="spinner-grow text-danger m-2" role="status"></div>\n                        <div class="spinner-grow text-warning m-2" role="status"></div>\n                        <div class="spinner-grow text-info m-2" role="status"></div>\n                        <div class="spinner-grow text-light m-2" role="status"></div>\n                        <div class="spinner-grow text-dark m-2" role="status"></div>\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n</div> <!-- end row -->                \n\n        <div class="row">\n            <div class="col-xl-6">\n\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Alignment</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.</p>\n\n                        <div class="d-flex justify-content-center">\n                            <div class="spinner-border" role="status"></div>\n                        </div>\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n  \n            <div class="col-xl-6">\n\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Placement</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Use <code>flexbox utilities</code>, <code>float utilities</code>, or <code>text alignment</code> utilities to place spinners exactly where you need them in any situation.</p>\n\n                        <div class="d-flex align-items-center">\n                            <strong>Loading...</strong>\n                            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>\n                        </div>\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n  </div> <!-- end col -->\n</div> <!-- end row -->\n        \n        <div class="row">\n            <div class="col-xl-6">\n\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Size</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Add <code>.spinner-border-sm</code> and <code>.spinner-border.avatar-**</code> to make a smaller spinner that can quickly be used within other components.\n                        </p>\n                        <div class="row">\n                            <div class="col-lg-6">\n                                <div class="spinner-border avatar-lg text-primary m-2" role="status"></div>\n                                <div class="spinner-grow avatar-lg text-secondary m-2" role="status"></div>\n                            </div><!-- end col -->\n\n                            <div class="col-lg-6">\n                                <div class="spinner-border avatar-md text-primary m-2" role="status"></div>\n                                <div class="spinner-grow avatar-md text-secondary m-2" role="status"></div>\n                            </div><!-- end col -->\n\n                            <div class="col-lg-6">\n                                <div class="spinner-border avatar-sm text-primary m-2" role="status"></div>\n                                <div class="spinner-grow avatar-sm text-secondary m-2" role="status"></div>\n                            </div><!-- end col -->\n\n                            <div class="col-lg-6">\n                                <div class="spinner-border spinner-border-sm m-2" role="status"></div>\n                                <div class="spinner-grow spinner-grow-sm m-2" role="status"></div>\n                            </div><!-- end col -->\n                        </div><!--end row -->\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n            </div> <!-- end col -->\n\n            <div class="col-xl-6">\n\n                <div class="card card-h-100">\n                    <div class="card-header">\n                        <h5 class="card-title">Buttons Spinner</h5>\n                    </div> <!-- end card-header -->\n\n                    <div class="card-body">\n                        <p>Use spinners within buttons to indicate an action is currently processing or taking place.\n                            You may also swap the text out of the spinner element and utilize button text as needed.\n        </p>\n\n                        <div class="row">\n                            <div class="col-lg-6">\n                                <div class="d-flex flex-wrap gap-2">\n                                    <button class="btn btn-primary" type="button" disabled>\n                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="visually-hidden">Loading...</span>\n                                    </button>\n                                    <button class="btn btn-primary" type="button" disabled>\n                                        <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>\n                                        Loading...\n                                    </button>\n                                </div>\n                            </div><!-- end col -->\n                            <div class="col-lg-6">\n                                <div class="d-flex flex-wrap gap-2">\n                                    <button class="btn btn-primary" type="button" disabled>\n                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> <span class="visually-hidden">Loading...</span>\n                                    </button>\n                                    <button class="btn btn-primary" type="button" disabled>\n                                        <span class="spinner-grow spinner-grow-sm me-1" role="status" aria-hidden="true"></span>\n                                        Loading...\n                                    </button>\n                                </div>\n                            </div><!-- end col -->\n                        </div> <!-- end row -->\n\n                    </div> <!-- end card body -->\n                </div> <!-- end card -->\n            </div> <!-- end col -->\n        </div>\n        <!-- end row -->\n\n    </div>\n<!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/ui-interface/base-ui/spinner/spinner.component.scss
var spinner_component_default2;
var init_spinner_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/base-ui/spinner/spinner.component.scss"() {
    spinner_component_default2 = "/* src/app/features/ui-interface/base-ui/spinner/spinner.component.scss */\n/*# sourceMappingURL=spinner.component.css.map */\n";
  }
});

// src/app/features/ui-interface/base-ui/spinner/spinner.component.ts
var SpinnerComponent;
var init_spinner_component3 = __esm({
  "src/app/features/ui-interface/base-ui/spinner/spinner.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_spinner_component();
    init_spinner_component2();
    init_core();
    init_common();
    SpinnerComponent = class SpinnerComponent2 {
    };
    SpinnerComponent = __decorate([
      Component({
        selector: "app-spinner",
        template: spinner_component_default,
        imports: [CommonModule],
        styles: [spinner_component_default2]
      })
    ], SpinnerComponent);
  }
});

// src/app/features/ui-interface/base-ui/spinner/spinner.component.spec.ts
var require_spinner_component_spec = __commonJS({
  "src/app/features/ui-interface/base-ui/spinner/spinner.component.spec.ts"(exports) {
    init_testing();
    init_spinner_component3();
    describe("SpinnerComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [SpinnerComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_spinner_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-base-ui-spinner-spinner.component.spec.js.map
