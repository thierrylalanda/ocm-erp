import {
  init_lg_video_es5,
  init_lg_zoom_es5,
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-LUSSWILE.js";
import {
  LightgalleryModule,
  init_lightgallery_angular
} from "./chunk-PZEBRXEI.js";
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

// angular:jit:template:src/app/features/pages/gallery/gallery.component.html
var gallery_component_default;
var init_gallery_component = __esm({
  "angular:jit:template:src/app/features/pages/gallery/gallery.component.html"() {
    gallery_component_default = '			<!-- Start Content -->\n			<div class="content-two">\n\n				<!-- start row -->\n                <div class="row justify-content-center">\n                    <div class="col-lg-12">   \n                        <div class="mb-3 border-bottom pb-3">\n                            <h6 class="mb-0">Gallery</h6>\n                        </div>              \n                        <div class="card mb-0">\n                            <div class="card-body pb-0">\n								<div class="row row-cols-2 row-cols-sm-4 row-cols-md-5">\n                                    <lightgallery class="row row-cols-2 row-cols-sm-4 row-cols-md-5 w-100" [settings]="settings" [onBeforeSlide]="onBeforeSlide">\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-01.png" data-src="assets/img/gallery/gallery-01.png">\n										<a href="assets/img/gallery/gallery-01.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-01.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-02.png" data-src="assets/img/gallery/gallery-02.png">\n										<a href="assets/img/gallery/gallery-02.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-02.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-03.png" data-src="assets/img/gallery/gallery-03.png">\n										<a href="assets/img/gallery/gallery-03.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-03.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-04.png" data-src="assets/img/gallery/gallery-04.png">\n										<a href="assets/img/gallery/gallery-04.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-04.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-05.png" data-src="assets/img/gallery/gallery-05.png">\n										<a href="assets/img/gallery/gallery-05.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-05.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-06.png" data-src="assets/img/gallery/gallery-06.png">\n										<a href="assets/img/gallery/gallery-06.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-06.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-07.png" data-src="assets/img/gallery/gallery-07.png">\n										<a href="assets/img/gallery/gallery-07.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-07.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-08.png" data-src="assets/img/gallery/gallery-08.png">\n										<a href="assets/img/gallery/gallery-08.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-08.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-09.png" data-src="assets/img/gallery/gallery-09.png">\n										<a href="assets/img/gallery/gallery-09.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-09.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-10.png" data-src="assets/img/gallery/gallery-10.png">\n										<a href="assets/img/gallery/gallery-10.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-10.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-11.png" data-src="assets/img/gallery/gallery-11.png">\n										<a href="assets/img/gallery/gallery-11.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-11.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-12.png" data-src="assets/img/gallery/gallery-12.png">\n										<a href="assets/img/gallery/gallery-12.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-12.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-13.png" data-src="assets/img/gallery/gallery-13.png">\n										<a href="assets/img/gallery/gallery-13.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-13.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-14.png" data-src="assets/img/gallery/gallery-14.png">\n										<a href="assets/img/gallery/gallery-14.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-14.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-15.png" data-src="assets/img/gallery/gallery-15.png">\n										<a href="assets/img/gallery/gallery-15.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-15.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n                                    </lightgallery>\n								</div> <!-- end row -->\n                            </div> <!-- end card-body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n                </div>     \n				<!-- end row -->\n\n			</div>\n			<!-- End Content -->';
  }
});

// angular:jit:style:src/app/features/pages/gallery/gallery.component.scss
var gallery_component_default2;
var init_gallery_component2 = __esm({
  "angular:jit:style:src/app/features/pages/gallery/gallery.component.scss"() {
    gallery_component_default2 = "/* src/app/features/pages/gallery/gallery.component.scss */\n/*# sourceMappingURL=gallery.component.css.map */\n";
  }
});

// src/app/features/pages/gallery/gallery.component.ts
var GalleryComponent;
var init_gallery_component3 = __esm({
  "src/app/features/pages/gallery/gallery.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_gallery_component();
    init_gallery_component2();
    init_core();
    init_lg_zoom_es5();
    init_lg_video_es5();
    init_common();
    init_lightgallery_angular();
    GalleryComponent = class GalleryComponent2 {
      lightGallery;
      needRefresh = false;
      settings = {
        counter: false,
        plugins: [lg_zoom_es5_default, lg_video_es5_default]
      };
      onInit = (detail) => {
        this.lightGallery = detail.instance;
      };
      onBeforeSlide = (detail) => {
        const { index, prevIndex } = detail;
      };
    };
    GalleryComponent = __decorate([
      Component({
        selector: "app-gallery",
        imports: [CommonModule, LightgalleryModule],
        template: gallery_component_default,
        styles: [gallery_component_default2]
      })
    ], GalleryComponent);
  }
});

// src/app/features/pages/gallery/gallery.component.spec.ts
var require_gallery_component_spec = __commonJS({
  "src/app/features/pages/gallery/gallery.component.spec.ts"(exports) {
    init_testing();
    init_gallery_component3();
    describe("GalleryComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [GalleryComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(GalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_gallery_component_spec();
//# sourceMappingURL=spec-app-features-pages-gallery-gallery.component.spec.js.map
