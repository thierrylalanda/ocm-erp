import {
  init_core_index,
  routes
} from "./chunk-NSLU4XKJ.js";
import "./chunk-EOPPSJQQ.js";
import "./chunk-FUOYOFVQ.js";
import "./chunk-5B5ZAECM.js";
import "./chunk-2O5UQ647.js";
import {
  RouterLink,
  init_router
} from "./chunk-EDGRTZKC.js";
import "./chunk-BIGDKMS7.js";
import "./chunk-RSLHKDCR.js";
import "./chunk-H7VTUQ3B.js";
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

// angular:jit:template:src/app/features/ui-interface/base-ui/links/links.component.html
var links_component_default;
var init_links_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/base-ui/links/links.component.html"() {
    links_component_default = '			<!-- Start Content -->\n            <div class="">\n\n                <!-- Page Header -->\n                <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n                    <div class="flex-grow-1">\n                        <h4 class="fs-18 fw-semibold mb-0">Links</h4>\n                    </div>\n\n                    <div class="text-end">\n                        <ol class="breadcrumb m-0 py-0">\n                            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n                            \n                            <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>\n                            \n                            <li class="breadcrumb-item active">Links</li>\n                        </ol>\n                    </div>\n				</div>\n				<!-- End Page Header -->\n                \n				<!-- start row -->\n                <div class="row">\n\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Colored links</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">You can use the <code>.link-*</code> classes to colorize links. Unlike the <a [routerLink]="routes.utilities"><code>.text-*</code> classes</a>, these classes have a <code>:hover</code> and <code>:focus</code> state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.</p>\n                                <p><a href="javascript:void(0);" class="link-primary">Primary link</a></p>\n                                <p><a href="javascript:void(0);" class="link-secondary">Secondary link</a></p>\n                                <p><a href="javascript:void(0);" class="link-success">Success link</a></p>\n                                <p><a href="javascript:void(0);" class="link-danger">Danger link</a></p>\n                                <p><a href="javascript:void(0);" class="link-warning">Warning link</a></p>\n                                <p><a href="javascript:void(0);" class="link-info">Info link</a></p>\n                                <p><a href="javascript:void(0);" class="link-light">Light link</a></p>\n                                <p><a href="javascript:void(0);" class="link-dark">Dark link</a></p>\n                                <p class="mb-0"><a href="javascript:void(0);" class="link-body-emphasis">Emphasis link</a></p>\n                            </div> <!-- end card body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Link utilities</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted"><a [routerLink]="routes.utilities">Colored link helpers</a> have been updated to pair with our link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.</p>\n\n                                <p><a href="javascript:void(0);" class="link-primary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</a></p>\n                                <p><a href="javascript:void(0);" class="link-secondary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Secondary link</a></p>\n                                <p><a href="javascript:void(0);" class="link-success text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Success link</a></p>\n                                <p><a href="javascript:void(0);" class="link-danger text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Danger link</a></p>\n                                <p><a href="javascript:void(0);" class="link-warning text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Warning link</a></p>\n                                <p><a href="javascript:void(0);" class="link-info text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Info link</a></p>\n                                <p><a href="javascript:void(0);" class="link-light text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Light link</a></p>\n                                <p><a href="javascript:void(0);" class="link-dark text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</a></p>\n                                <p><a href="javascript:void(0);" class="link-body-emphasis text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>\n\n                            </div> <!-- end card body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n                </div>\n				<!-- end row -->\n\n                <div class="row">\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Link opacity</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">Change the alpha opacity of the link <code>rgba()</code> color value with utilities. Please be aware that changes to a color\u2019s opacity can lead to links with <em>insufficient</em> contrast.</p>\n\n                                <p><a class="link-opacity-10" href="javascript:void(0);">Link opacity 10</a></p>\n                                <p><a class="link-opacity-25" href="javascript:void(0);">Link opacity 25</a></p>\n                                <p><a class="link-opacity-50" href="javascript:void(0);">Link opacity 50</a></p>\n                                <p><a class="link-opacity-75" href="javascript:void(0);">Link opacity 75</a></p>\n                                <p class="mb-0"><a class="link-opacity-100" href="javascript:void(0);">Link opacity 100</a></p>\n                            </div> <!-- end card body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Link hover opacity</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">You can even change the opacity level on hover.</p>\n\n                                <p><a class="link-opacity-10-hover" href="javascript:void(0);">Link hover opacity 10</a></p>\n                                <p><a class="link-opacity-25-hover" href="javascript:void(0);">Link hover opacity 25</a></p>\n                                <p><a class="link-opacity-50-hover" href="javascript:void(0);">Link hover opacity 50</a></p>\n                                <p><a class="link-opacity-75-hover" href="javascript:void(0);">Link hover opacity 75</a></p>\n                                <p class="mb-0"><a class="link-opacity-100-hover" href="javascript:void(0);">Link hover opacity 100</a></p>\n                            </div> <!-- end card body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n                </div><!--end row-->\n\n                <div class="row">\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Underline color</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">Change the underline\u2019s color independent of the link text color.</p>\n								\n                                <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-primary">Primary underline</a></p>\n                                <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-secondary">Secondary underline</a></p>\n                                <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-success">Success underline</a></p>\n                                <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-danger">Danger underline</a></p>\n                                <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-warning">Warning underline</a></p>\n                                <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-info">Info underline</a></p>\n                                <p><a href="javascript:void(0);" class="text-decoration-underline link-underline-light">Light underline</a></p>\n                                <p class="mb-0"><a href="javascript:void(0);" class="text-decoration-underline link-underline-dark">Dark underline</a></p>\n                            </div> <!-- end card body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n					\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Underline opacity</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">Change the underline\u2019s opacity. Requires adding <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>\n\n                                <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" href="javascript:void(0);">Underline opacity 0</a></p>\n                                <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" href="javascript:void(0);">Underline opacity 10</a></p>\n                                <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" href="javascript:void(0);">Underline opacity 25</a></p>\n                                <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" href="javascript:void(0);">Underline opacity 50</a></p>\n                                <p><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" href="javascript:void(0);">Underline opacity 75</a></p>\n                                <p class="mb-0"><a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" href="javascript:void(0);">Underline opacity 100</a></p>\n                            </div> <!-- end card body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n                </div> <!-- end row -->\n\n                <div class="row">\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Underline offset</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">Change the underline\u2019s opacity. Requires adding <code>.link-underline</code> to first set an <code>rgba()</code> color we use to then modify the alpha opacity.</p>\n\n                                <p><a href="javascript:void(0);">Default link</a></p>\n                                <p><a class="text-decoration-underline link-offset-1" href="javascript:void(0);">Offset 1 link</a></p>\n                                <p><a class="text-decoration-underline link-offset-2" href="javascript:void(0);">Offset 2 link</a></p>\n                                <p class="mb-0"><a class="text-decoration-underline link-offset-3" href="javascript:void(0);">Offset 3 link</a></p>\n\n                            </div> <!-- end card body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n					\n                    <div class="col-xl-6">\n                        <div class="card">\n                            <div class="card-header">\n                                <h5 class="card-title">Hover variants</h5>\n                            </div>\n\n                            <div class="card-body">\n                                <p class="text-muted">Just like the <code>.link-opacity-*-hover</code> utilities, <code>.link-offset</code> and <code>.link-underline-opacity</code> utilities include <code>:hover</code> variants by default. Mix and match to create unique link styles.</p>\n\n                                <a class="link-offset-2 link-offset-3-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="javascript:void(0);">\n                                    Underline opacity 0\n                                </a>\n                            </div> <!-- end card body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n                </div> <!--end row -->\n\n            </div>\n			<!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/ui-interface/base-ui/links/links.component.scss
var links_component_default2;
var init_links_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/base-ui/links/links.component.scss"() {
    links_component_default2 = "/* src/app/features/ui-interface/base-ui/links/links.component.scss */\n/*# sourceMappingURL=links.component.css.map */\n";
  }
});

// src/app/features/ui-interface/base-ui/links/links.component.ts
var LinksComponent;
var init_links_component3 = __esm({
  "src/app/features/ui-interface/base-ui/links/links.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_links_component();
    init_links_component2();
    init_core();
    init_common();
    init_core_index();
    init_router();
    LinksComponent = class LinksComponent2 {
      routes = routes;
    };
    LinksComponent = __decorate([
      Component({
        selector: "app-links",
        template: links_component_default,
        imports: [CommonModule, RouterLink],
        styles: [links_component_default2]
      })
    ], LinksComponent);
  }
});

// src/app/features/ui-interface/base-ui/links/links.component.spec.ts
var require_links_component_spec = __commonJS({
  "src/app/features/ui-interface/base-ui/links/links.component.spec.ts"(exports) {
    init_testing();
    init_links_component3();
    describe("LinksComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [LinksComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LinksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_links_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-base-ui-links-links.component.spec.js.map
