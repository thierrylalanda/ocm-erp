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

// angular:jit:template:src/app/features/ui-interface/base-ui/breadcrumb/breadcrumb.component.html
var breadcrumb_component_default;
var init_breadcrumb_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/base-ui/breadcrumb/breadcrumb.component.html"() {
    breadcrumb_component_default = '			<!-- Start Content -->\n      <div class="">\n\n        <!-- Page Header -->\n        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n            <div class="flex-grow-1">\n                <h4 class="fs-18 fw-semibold mb-0">Breadcrumb</h4>\n            </div>\n            <div class="text-end">\n                <ol class="breadcrumb m-0 py-0">\n                    <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n                    \n                    <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>\n                    \n                    <li class="breadcrumb-item active">Breadcrumb</li>\n                </ol>\n            </div>\n</div>\n<!-- End Page Header -->\n\n<!-- start row -->\n        <div class="row">\n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Default Breadcrumb</h5>\n                    </div><!-- end card-header -->\n                    <div class="card-body">\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb mb-0 py-2">\n                                <li class="breadcrumb-item active" aria-current="page">Home</li>\n                            </ol>\n                        </nav>\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb mb-0 py-2">\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n                                <li class="breadcrumb-item active" aria-current="page">Library</li>\n                            </ol>\n                        </nav>\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb mb-0 py-2">\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>\n                                <li class="breadcrumb-item active" aria-current="page">Data</li>\n                            </ol>\n                        </nav>\n                    </div> <!-- end card-body -->\n                </div> <!-- end card-->\n            </div> <!-- end col -->\n\n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Breadcrumb with Icons</h5>\n                    </div><!-- end card-header -->\n                    <div class="card-body">\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb p-2 mb-0">\n                                <li class="breadcrumb-item active" aria-current="page"><i class="ti ti-smart-home fs-16 me-1"></i>Home</li>\n                            </ol>\n                        </nav>\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb p-2 mb-0">\n                                <li class="breadcrumb-item"><a href="javascript:void(0);"><i class="ti ti-smart-home fs-16 me-1"></i>Home</a></li>\n                                <li class="breadcrumb-item active" aria-current="page">Library</li>\n                            </ol>\n                        </nav>\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb p-2 mb-0">\n                                <li class="breadcrumb-item"><a href="javascript:void(0);"><i class="ti ti-smart-home fs-16 me-1"></i>Home</a></li>\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>\n                                <li class="breadcrumb-item active" aria-current="page">Data</li>\n                            </ol>\n                        </nav>\n                    </div> <!-- end card-body -->\n                </div> <!-- end card-->\n            </div> <!-- end col -->\n        </div>\n<!-- end row -->\n        \n<!-- start row -->\n        <div class="row">\n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Arrow Style</h5>\n                    </div><!-- end card-header -->\n                    <div class="card-body">\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb breadcrumb-arrow mb-0 py-2">\n                                <li class="breadcrumb-item active" aria-current="page">Home</li>\n                            </ol>\n                        </nav>\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb breadcrumb-arrow mb-0 py-2">\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n                                <li class="breadcrumb-item active" aria-current="page">Library</li>\n                            </ol>\n                        </nav>\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb breadcrumb-arrow mb-0 py-2">\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>\n                                <li class="breadcrumb-item active" aria-current="page">Data</li>\n                            </ol>\n                        </nav>\n                    </div> <!-- end card-body -->\n                </div> <!-- end card-->\n            </div> <!-- end col -->\n\n            <div class="col-xl-6">\n                <div class="card">\n                    <div class="card-header">\n                        <h5 class="card-title">Pipe Style</h5>\n                    </div><!-- end card-header -->\n                    <div class="card-body">\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb breadcrumb-pipe py-2 mb-0">\n                                <li class="breadcrumb-item active" aria-current="page">Home</li>\n                            </ol>\n                        </nav>\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb breadcrumb-pipe py-2 mb-0">\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n                                <li class="breadcrumb-item active" aria-current="page">Library</li>\n                            </ol>\n                        </nav>\n                        <nav aria-label="breadcrumb">\n                            <ol class="breadcrumb breadcrumb-pipe py-2 mb-0">\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>\n                                <li class="breadcrumb-item"><a href="javascript:void(0);">Library</a></li>\n                                <li class="breadcrumb-item active" aria-current="page">Data</li>\n                            </ol>\n                        </nav>\n                    </div> <!-- end card-body -->\n                </div> <!-- end card-->\n            </div> <!-- end col -->\n\n\n        </div>\n\n    </div> \n<!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/ui-interface/base-ui/breadcrumb/breadcrumb.component.scss
var breadcrumb_component_default2;
var init_breadcrumb_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/base-ui/breadcrumb/breadcrumb.component.scss"() {
    breadcrumb_component_default2 = "/* src/app/features/ui-interface/base-ui/breadcrumb/breadcrumb.component.scss */\n/*# sourceMappingURL=breadcrumb.component.css.map */\n";
  }
});

// src/app/features/ui-interface/base-ui/breadcrumb/breadcrumb.component.ts
var BreadcrumbComponent;
var init_breadcrumb_component3 = __esm({
  "src/app/features/ui-interface/base-ui/breadcrumb/breadcrumb.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_breadcrumb_component();
    init_breadcrumb_component2();
    init_core();
    init_common();
    BreadcrumbComponent = class BreadcrumbComponent2 {
    };
    BreadcrumbComponent = __decorate([
      Component({
        selector: "app-breadcrumb",
        template: breadcrumb_component_default,
        imports: [CommonModule],
        styles: [breadcrumb_component_default2]
      })
    ], BreadcrumbComponent);
  }
});

// src/app/features/ui-interface/base-ui/breadcrumb/breadcrumb.component.spec.ts
var require_breadcrumb_component_spec = __commonJS({
  "src/app/features/ui-interface/base-ui/breadcrumb/breadcrumb.component.spec.ts"(exports) {
    init_testing();
    init_breadcrumb_component3();
    describe("BreadcrumbComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [BreadcrumbComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(BreadcrumbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_breadcrumb_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-base-ui-breadcrumb-breadcrumb.component.spec.js.map
