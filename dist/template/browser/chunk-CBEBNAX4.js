import {
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-5P3VLMEM.js";
import {
  LightgalleryComponent,
  LightgalleryModule
} from "./chunk-Q45D2WIA.js";
import {
  CommonModule
} from "./chunk-LNSVVXVJ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-HKG6HBOI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/gallery/gallery.component.ts
var GalleryComponent = class _GalleryComponent {
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
  static \u0275fac = function GalleryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["app-gallery"]], decls: 55, vars: 2, consts: [[1, "content-two"], [1, "row", "justify-content-center"], [1, "col-lg-12"], [1, "mb-3", "border-bottom", "pb-3"], [1, "mb-0"], [1, "card", "mb-0"], [1, "card-body", "pb-0"], [1, "row", "row-cols-2", "row-cols-sm-4", "row-cols-md-5"], [1, "row", "row-cols-2", "row-cols-sm-4", "row-cols-md-5", "w-100", 3, "settings", "onBeforeSlide"], ["data-responsive", "assets/img/gallery/gallery-01.png", "data-src", "assets/img/gallery/gallery-01.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-01.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-01.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-02.png", "data-src", "assets/img/gallery/gallery-02.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-02.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-02.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-03.png", "data-src", "assets/img/gallery/gallery-03.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-03.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-03.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-04.png", "data-src", "assets/img/gallery/gallery-04.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-04.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-04.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-05.png", "data-src", "assets/img/gallery/gallery-05.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-05.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-05.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-06.png", "data-src", "assets/img/gallery/gallery-06.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-06.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-06.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-07.png", "data-src", "assets/img/gallery/gallery-07.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-07.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-07.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-08.png", "data-src", "assets/img/gallery/gallery-08.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-08.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-08.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-09.png", "data-src", "assets/img/gallery/gallery-09.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-09.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-09.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-10.png", "data-src", "assets/img/gallery/gallery-10.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-10.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-10.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-11.png", "data-src", "assets/img/gallery/gallery-11.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-11.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-11.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-12.png", "data-src", "assets/img/gallery/gallery-12.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-12.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-12.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-13.png", "data-src", "assets/img/gallery/gallery-13.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-13.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-13.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-14.png", "data-src", "assets/img/gallery/gallery-14.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-14.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-14.png", "alt", "img", 1, "rounded"], ["data-responsive", "assets/img/gallery/gallery-15.png", "data-src", "assets/img/gallery/gallery-15.png", 1, "col", "mb-3"], ["href", "assets/img/gallery/gallery-15.png", "data-fancybox", "gallery", 1, "gallery-item"], ["src", "assets/img/gallery/gallery-15.png", "alt", "img", 1, "rounded"]], template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
      \u0275\u0275text(5, "Gallery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "lightgallery", 8)(10, "div", 9)(11, "a", 10);
      \u0275\u0275element(12, "img", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 12)(14, "a", 13);
      \u0275\u0275element(15, "img", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 15)(17, "a", 16);
      \u0275\u0275element(18, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 18)(20, "a", 19);
      \u0275\u0275element(21, "img", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 21)(23, "a", 22);
      \u0275\u0275element(24, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 24)(26, "a", 25);
      \u0275\u0275element(27, "img", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 27)(29, "a", 28);
      \u0275\u0275element(30, "img", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 30)(32, "a", 31);
      \u0275\u0275element(33, "img", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 33)(35, "a", 34);
      \u0275\u0275element(36, "img", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 36)(38, "a", 37);
      \u0275\u0275element(39, "img", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 39)(41, "a", 40);
      \u0275\u0275element(42, "img", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 42)(44, "a", 43);
      \u0275\u0275element(45, "img", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 45)(47, "a", 46);
      \u0275\u0275element(48, "img", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 48)(50, "a", 49);
      \u0275\u0275element(51, "img", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 51)(53, "a", 52);
      \u0275\u0275element(54, "img", 53);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("settings", ctx.settings)("onBeforeSlide", ctx.onBeforeSlide);
    }
  }, dependencies: [CommonModule, LightgalleryModule, LightgalleryComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{ selector: "app-gallery", imports: [CommonModule, LightgalleryModule], template: '			<!-- Start Content -->\n			<div class="content-two">\n\n				<!-- start row -->\n                <div class="row justify-content-center">\n                    <div class="col-lg-12">   \n                        <div class="mb-3 border-bottom pb-3">\n                            <h6 class="mb-0">Gallery</h6>\n                        </div>              \n                        <div class="card mb-0">\n                            <div class="card-body pb-0">\n								<div class="row row-cols-2 row-cols-sm-4 row-cols-md-5">\n                                    <lightgallery class="row row-cols-2 row-cols-sm-4 row-cols-md-5 w-100" [settings]="settings" [onBeforeSlide]="onBeforeSlide">\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-01.png" data-src="assets/img/gallery/gallery-01.png">\n										<a href="assets/img/gallery/gallery-01.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-01.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-02.png" data-src="assets/img/gallery/gallery-02.png">\n										<a href="assets/img/gallery/gallery-02.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-02.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-03.png" data-src="assets/img/gallery/gallery-03.png">\n										<a href="assets/img/gallery/gallery-03.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-03.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-04.png" data-src="assets/img/gallery/gallery-04.png">\n										<a href="assets/img/gallery/gallery-04.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-04.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-05.png" data-src="assets/img/gallery/gallery-05.png">\n										<a href="assets/img/gallery/gallery-05.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-05.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-06.png" data-src="assets/img/gallery/gallery-06.png">\n										<a href="assets/img/gallery/gallery-06.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-06.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-07.png" data-src="assets/img/gallery/gallery-07.png">\n										<a href="assets/img/gallery/gallery-07.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-07.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-08.png" data-src="assets/img/gallery/gallery-08.png">\n										<a href="assets/img/gallery/gallery-08.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-08.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-09.png" data-src="assets/img/gallery/gallery-09.png">\n										<a href="assets/img/gallery/gallery-09.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-09.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-10.png" data-src="assets/img/gallery/gallery-10.png">\n										<a href="assets/img/gallery/gallery-10.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-10.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-11.png" data-src="assets/img/gallery/gallery-11.png">\n										<a href="assets/img/gallery/gallery-11.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-11.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-12.png" data-src="assets/img/gallery/gallery-12.png">\n										<a href="assets/img/gallery/gallery-12.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-12.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-13.png" data-src="assets/img/gallery/gallery-13.png">\n										<a href="assets/img/gallery/gallery-13.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-13.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-14.png" data-src="assets/img/gallery/gallery-14.png">\n										<a href="assets/img/gallery/gallery-14.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-14.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n									<div class="col mb-3" data-responsive="assets/img/gallery/gallery-15.png" data-src="assets/img/gallery/gallery-15.png">\n										<a href="assets/img/gallery/gallery-15.png" data-fancybox="gallery" class="gallery-item">\n											<img src="assets/img/gallery/gallery-15.png" class="rounded" alt="img">\n										</a>\n									</div> <!-- end col -->\n                                    </lightgallery>\n								</div> <!-- end row -->\n                            </div> <!-- end card-body -->\n                        </div> <!-- end card -->\n                    </div> <!-- end col -->\n                </div>     \n				<!-- end row -->\n\n			</div>\n			<!-- End Content -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src/app/features/pages/gallery/gallery.component.ts", lineNumber: 16 });
})();
export {
  GalleryComponent
};
//# sourceMappingURL=chunk-CBEBNAX4.js.map
