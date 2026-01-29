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

// angular:jit:template:src/app/features/ui-interface/base-ui/ratio/ratio.component.html
var ratio_component_default;
var init_ratio_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/base-ui/ratio/ratio.component.html"() {
    ratio_component_default = '            <!-- Start Content -->\n            <div class="">\n\n                <!-- Page Header -->\n                <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 py-3">\n                    <div class="flex-grow-1">\n                        <h4 class="fs-18 fw-semibold mb-0">Ratio Video</h4>\n                    </div>\n\n                    <div class="text-end">\n                        <ol class="breadcrumb m-0 py-0">\n                            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n\n                            <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>\n\n                            <li class="breadcrumb-item active">Ratio Video</li>\n                        </ol>\n                    </div>\n                </div>\n                <!-- End Page Header -->\n\n                <!-- start row -->\n                <div class="row">\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Responsive Ratio video 21:9</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">Use class <code>.ratio-21x9</code>\n                                    <!-- 21:9 aspect ratio -->\n                                    <div class="ratio ratio-21x9">\n                                        <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"></iframe>\n                                    </div>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Responsive Ratio video 1:1</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">Use class <code>.ratio-1x1</code></p>\n                                <!-- 1:1 aspect ratio -->\n                                <div class="ratio ratio-1x1">\n                                    <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"></iframe>\n                                </div>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n                    </div><!-- end col -->\n\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Responsive Ratio video 16:9</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">Use class <code>.ratio-16x9</code></p>\n                                    <!-- 16:9 aspect ratio -->\n                                    <div class="ratio ratio-16x9">\n                                        <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"></iframe>\n                                    </div>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Responsive Ratio video 4:3</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">Use class <code>.ratio-4x3</code></p>\n                                    <!-- 4:3 aspect ratio -->\n                                    <div class="ratio ratio-4x3">\n                                        <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"></iframe>\n                                    </div>\n                            </div><!-- end card body -->\n                        </div><!-- end card -->\n                    </div><!-- end col -->\n                </div>\n                <!-- end row -->\n\n            </div>\n            <!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/ui-interface/base-ui/ratio/ratio.component.scss
var ratio_component_default2;
var init_ratio_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/base-ui/ratio/ratio.component.scss"() {
    ratio_component_default2 = "/* src/app/features/ui-interface/base-ui/ratio/ratio.component.scss */\n/*# sourceMappingURL=ratio.component.css.map */\n";
  }
});

// src/app/features/ui-interface/base-ui/ratio/ratio.component.ts
var RatioComponent;
var init_ratio_component3 = __esm({
  "src/app/features/ui-interface/base-ui/ratio/ratio.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ratio_component();
    init_ratio_component2();
    init_core();
    init_common();
    RatioComponent = class RatioComponent2 {
    };
    RatioComponent = __decorate([
      Component({
        selector: "app-ratio",
        template: ratio_component_default,
        imports: [CommonModule],
        styles: [ratio_component_default2]
      })
    ], RatioComponent);
  }
});

// src/app/features/ui-interface/base-ui/ratio/ratio.component.spec.ts
var require_ratio_component_spec = __commonJS({
  "src/app/features/ui-interface/base-ui/ratio/ratio.component.spec.ts"(exports) {
    init_testing();
    init_ratio_component3();
    describe("RatioComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [RatioComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(RatioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ratio_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-base-ui-ratio-ratio.component.spec.js.map
