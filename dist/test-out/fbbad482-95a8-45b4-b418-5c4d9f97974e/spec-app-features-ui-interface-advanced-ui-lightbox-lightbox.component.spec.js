import {
  Lightbox,
  LightboxModule,
  init_ngx_lightbox
} from "./chunk-O22VSTEP.js";
import {
  LightgalleryModule,
  init_lightgallery_angular
} from "./chunk-PZEBRXEI.js";
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

// angular:jit:template:src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.html
var lightbox_component_default;
var init_lightbox_component = __esm({
  "angular:jit:template:src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.html"() {
    lightbox_component_default = '<!-- Page Header -->\n<div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">\n  <div class="flex-grow-1">\n      <h4 class="fs-18 fw-semibold mb-0">Light Box</h4>\n  </div>\n\n  <div class="text-end">\n      <ol class="breadcrumb m-0 py-0">\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>\n\n          <li class="breadcrumb-item"><a href="javascript: void(0);">Advanced UI</a></li>\n\n          <li class="breadcrumb-item active">Light Box</li>\n      </ol>\n  </div>\n</div>\n<!-- /Page Header -->\n<div class="row">\n  <!-- Lightbox -->\n  <div class="col-md-12">\n    <div class="card">\n      <div class="card-header">\n        <h5 class="card-title">Single Image Lightbox</h5>\n      </div>\n      <div class="card-body">\n        <div class="row">\n          @for (image of albumsOne; track image; let i = $index) {\n            @if (i < 2) {\n              <div class="col-md-4 mb-2 mb-md-0">\n                <a (click)="open(i, albumsOne)"href="javascript:void(0);">\n                  <img\n                    class="img-fluid"\n                    [src]="image.src"\n                    alt="image"\n                    />\n                  </a>\n                </div>\n              }\n            }\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /Lightbox -->\n\n    <!-- Lightbox -->\n    <div class="col-md-12">\n      <div class="card">\n        <div class="card-header">\n          <h5 class="card-title">Image with Description</h5>\n        </div>\n        <div class="card-body">\n          <div class="row">\n            @for (image of albumsTwo; track image; let i = $index) {\n              @if (i > 2) {\n                <div class="col-md-4 mb-2 mb-md-0">\n                  <a (click)="open(i, albumsTwo)" href="javascript:void(0);">\n                    <img\n                      class="img-fluid"\n                      [src]="image.src"\n                      alt="image"\n                      />\n                    </a>\n                  </div>\n                }\n              }\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Lightbox -->\n    </div>\n';
  }
});

// angular:jit:style:src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.scss
var lightbox_component_default2;
var init_lightbox_component2 = __esm({
  "angular:jit:style:src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.scss"() {
    lightbox_component_default2 = "/* src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.scss */\n/*# sourceMappingURL=lightbox.component.css.map */\n";
  }
});

// src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.ts
var LightboxComponent;
var init_lightbox_component3 = __esm({
  "src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_lightbox_component();
    init_lightbox_component2();
    init_core();
    init_common();
    init_ngx_lightbox();
    init_lightgallery_angular();
    LightboxComponent = class LightboxComponent2 {
      _lightbox;
      albumsOne = [];
      albumsTwo = [];
      constructor(_lightbox) {
        this._lightbox = _lightbox;
        for (let i = 1; i <= 5; i++) {
          const src = "assets/img/media/img-0" + i + ".jpg";
          const caption = "Image " + i + " caption here";
          this.albumsOne.push({ src });
          this.albumsTwo.push({ src, caption });
        }
      }
      open(index, albumArray) {
        this._lightbox.open(albumArray, index);
      }
      close() {
        this._lightbox.close();
      }
      static ctorParameters = () => [
        { type: Lightbox }
      ];
    };
    LightboxComponent = __decorate([
      Component({
        selector: "app-lightbox",
        template: lightbox_component_default,
        imports: [CommonModule, LightgalleryModule, LightboxModule],
        styles: [lightbox_component_default2]
      })
    ], LightboxComponent);
  }
});

// src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.spec.ts
var require_lightbox_component_spec = __commonJS({
  "src/app/features/ui-interface/advanced-ui/lightbox/lightbox.component.spec.ts"(exports) {
    init_testing();
    init_lightbox_component3();
    describe("LightboxComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [LightboxComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LightboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_lightbox_component_spec();
//# sourceMappingURL=spec-app-features-ui-interface-advanced-ui-lightbox-lightbox.component.spec.js.map
